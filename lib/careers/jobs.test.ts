import { describe, expect, it } from 'vitest';
import { filterInstitutionJobs, isUuid, pickInstitutionJob } from './jobs';
import { DENTAL_ID, PHARMACY_ID, makeJob } from './test-fixtures';

const pharmacy = makeJob();
const dental = makeJob({
  id: '11111111-1111-4111-8111-111111111111',
  title: 'PROF - DCH - PERIODONTICS',
  institution: { id: DENTAL_ID, name: 'JKKN Dental College and Hospital' },
});

describe('isUuid', () => {
  it('accepts a uuid and rejects other strings', () => {
    expect(isUuid(PHARMACY_ID)).toBe(true);
    expect(isUuid('not-a-uuid')).toBe(false);
    expect(isUuid('../../admin')).toBe(false);
  });
});

describe('filterInstitutionJobs', () => {
  it('keeps only jobs of the given institution', () => {
    expect(filterInstitutionJobs({ data: [pharmacy, dental] }, PHARMACY_ID)).toEqual([pharmacy]);
  });

  it('fails closed when the institution id is missing', () => {
    expect(filterInstitutionJobs({ data: [pharmacy, dental] }, undefined)).toEqual([]);
  });

  it('returns [] for malformed payloads', () => {
    expect(filterInstitutionJobs(null, PHARMACY_ID)).toEqual([]);
    expect(filterInstitutionJobs({ data: 'oops' }, PHARMACY_ID)).toEqual([]);
    expect(filterInstitutionJobs({ error: 'boom' }, PHARMACY_ID)).toEqual([]);
  });

  it('drops entries that are not valid jobs', () => {
    const broken = { id: 'x', institution: { id: PHARMACY_ID } };
    expect(filterInstitutionJobs({ data: [broken, pharmacy] }, PHARMACY_ID)).toEqual([pharmacy]);
  });
});

describe('pickInstitutionJob', () => {
  it('returns the job when it belongs to the institution', () => {
    expect(pickInstitutionJob({ data: pharmacy }, PHARMACY_ID)).toEqual(pharmacy);
  });

  it("rejects another institution's job", () => {
    expect(pickInstitutionJob({ data: dental }, PHARMACY_ID)).toBeNull();
  });

  it('fails closed without an institution id or with a bad payload', () => {
    expect(pickInstitutionJob({ data: pharmacy }, undefined)).toBeNull();
    expect(pickInstitutionJob({ error: 'Job not found.' }, PHARMACY_ID)).toBeNull();
  });
});
