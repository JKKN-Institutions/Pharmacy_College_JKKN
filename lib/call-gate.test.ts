import { describe, expect, it } from "vitest"
import {
  gateIntentForHref,
  isGateNumber,
  isUngatedPath,
  numberAtOffset,
  pageTag,
  programmeForPath,
  telUrlFor,
  whatsappGateUrl,
} from "@/lib/call-gate"

const PHARM_D = "b3640fc2-4260-4548-b66b-1a9908e876ea"
const B_PHARM = "0d980d34-f945-4de6-8c88-ee97b2620b99"
const B_PHARM_LE = "771422d3-c867-4ebc-9126-15207d5a757e"
const M_PHARM_RA = "ab96b847-f9e3-41ee-bdd6-3500dd869571"
const M_PHARM_PHARMACOLOGY = "81857fa8-1481-49d6-939b-f4e601616734"

describe("numberAtOffset (plain-text numbers)", () => {
  const text = "For admission call +91 93458 55001 or the helpline on 86673 65249 today."
  it("finds the number a tap lands on, in any of its written forms", () => {
    expect(numberAtOffset(text, text.indexOf("93458 55001") + 3)).toBe("9345855001")
    expect(numberAtOffset(text, text.indexOf("+91"))).toBe("9345855001")
    expect(numberAtOffset(text, text.indexOf("65249"))).toBe("8667365249")
    expect(numberAtOffset("Call 9345855001 now", 7)).toBe("9345855001")
  })
  it("returns null off the number, and for years or short numbers", () => {
    expect(numberAtOffset(text, 2)).toBeNull()
    expect(numberAtOffset("Established in 1985, 100 B.Pharm seats", 16)).toBeNull()
  })
  it("only the admission number is gated", () => {
    expect(isGateNumber("9345855001")).toBe(true)
    expect(isGateNumber("9942095377")).toBe(false)
    expect(telUrlFor("9942095377")).toBe("tel:+919942095377")
  })
})

describe("gateIntentForHref", () => {
  it("gates every way the site writes the admission number", () => {
    expect(gateIntentForHref("tel:+919345855001")).toBe("call")
    expect(gateIntentForHref("tel:9345855001")).toBe("call")
    expect(gateIntentForHref("tel:+91 93458 55001")).toBe("call")
    expect(gateIntentForHref("https://wa.me/919345855001")).toBe("whatsapp")
    expect(gateIntentForHref("https://wa.me/919345855001?text=Hi%2C%20pharmacy")).toBe("whatsapp")
    expect(gateIntentForHref("https://api.whatsapp.com/send?phone=919345855001&text=hi")).toBe("whatsapp")
  })

  it("leaves every other number and link alone", () => {
    expect(gateIntentForHref("tel:+919942095377")).toBeNull() // drug information centre
    expect(gateIntentForHref("tel:8667365249")).toBeNull() // anti-ragging helpline
    expect(gateIntentForHref("https://wa.me/919942095377")).toBeNull()
    expect(gateIntentForHref("https://www.jkkn.ai/apply/jkkn-admission-2026")).toBeNull()
    expect(gateIntentForHref("mailto:pharmacy@jkkn.ac.in")).toBeNull()
    expect(gateIntentForHref("/contact/")).toBeNull()
  })
})

describe("isUngatedPath", () => {
  it("keeps careers and the Ph.D page (not a CRM programme) direct", () => {
    expect(isUngatedPath("/careers/")).toBe(true)
    expect(isUngatedPath("/careers/1b810e2e-dbc5-4a0b-bae3-fd7c76bfe241/")).toBe(true)
    expect(isUngatedPath("/phd/")).toBe(true)
    expect(isUngatedPath("/contact/")).toBe(false)
    expect(isUngatedPath("/")).toBe(false)
    expect(isUngatedPath("/pharm-d/")).toBe(false)
    expect(isUngatedPath("/careers-fair-2026/")).toBe(false)
  })
})

describe("programmeForPath", () => {
  it("pre-selects the course of a one-programme page and nothing elsewhere", () => {
    expect(programmeForPath("/pharm-d/")).toBe(PHARM_D)
    expect(programmeForPath("/admissions/pharm.d/")).toBe(PHARM_D)
    expect(programmeForPath("/b-pharmacy/")).toBe(B_PHARM)
    expect(programmeForPath("/admissions/b.pharm/")).toBe(B_PHARM)
    expect(programmeForPath("/b-pharmacy-lateral-entry/")).toBe(B_PHARM_LE)
    expect(programmeForPath("/pharmaceutical-regulatory-affairs/")).toBe(M_PHARM_RA)
    expect(programmeForPath("/m-pharmacy/")).toBeUndefined()
    expect(programmeForPath("/pharmacology/")).toBeUndefined()
    expect(programmeForPath("/pharmd-time-table/")).toBeUndefined()
    expect(programmeForPath("/contact/")).toBeUndefined()
    expect(programmeForPath("/")).toBeUndefined()
  })
})

describe("whatsappGateUrl", () => {
  it("types the course and a page reference, never a name or phone", () => {
    const url = whatsappGateUrl(PHARM_D, "/contact/")
    expect(url.startsWith("https://wa.me/919345855001?text=")).toBe(true)
    expect(decodeURIComponent(url.split("?text=")[1])).toBe("Hi, Pharm.D admission details venum. Ref: WEB-PHARMACY-contact")
    const mp = whatsappGateUrl(M_PHARM_PHARMACOLOGY, "/")
    expect(decodeURIComponent(mp.split("?text=")[1])).toBe("Hi, M.Pharm Pharmacology admission details venum. Ref: WEB-PHARMACY-home")
    const le = whatsappGateUrl(B_PHARM_LE, "/admissions/b.pharm/")
    expect(decodeURIComponent(le.split("?text=")[1])).toBe(
      "Hi, B.Pharm Lateral Entry admission details venum. Ref: WEB-PHARMACY-admissions-bpharm"
    )
  })

  it("keeps the page tag short", () => {
    expect(pageTag("/")).toBe("-home")
    expect(pageTag("/admissions/pharm.d/")).toBe("-admissions-pharm.d")
  })
})
