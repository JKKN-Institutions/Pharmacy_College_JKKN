#!/bin/bash

# Move about pages
mv "app/about/overview" "app/overview"
mv "app/about/vision-mission" "app/vision-mission"
mv "app/about/institutional-distinctiveness" "app/institutional-distinctiveness"
mv "app/about/our-trust" "app/our-trust"
mv "app/about/our-management" "app/our-management"
mv "app/about/our-institutions" "app/our-institutions"
mv "app/about/the-principal" "app/the-principal"
mv "app/about/administration" "app/administration"
mv "app/about/cpio" "app/cpio"
mv "app/about/why-jkkn" "app/why-jkkn"
mv "app/about/peos" "app/peos"
mv "app/about/quality-policy" "app/quality-policy"
mv "app/about/general-rules" "app/general-rules"
mv "app/about/institutional-development-plan" "app/institutional-development-plan"
mv "app/about/institutional-strategic-plan" "app/institutional-strategic-plan"

# Move affiliation details pages
mv "app/about/affiliation-details/recognition-approval-&-accrediation" "app/recognition-approval-&-accrediation"
mv "app/about/affiliation-details/aicte" "app/aicte"
mv "app/about/affiliation-details/pharmacy-council" "app/pharmacy-council"
mv "app/about/affiliation-details/university" "app/university"

# Move academic pages
mv "app/academic/admission-process" "app/admission-process"
mv "app/academic/attainment-cos-pos" "app/attainment-cos-pos"
mv "app/academic/details-of-students" "app/details-of-students"
mv "app/academic/exam-schedule" "app/exam-schedule"
mv "app/academic/faculty-profile" "app/faculty-profile"
mv "app/academic/ordinances" "app/ordinances"
mv "app/academic/study-material" "app/study-material"

# Move time-table pages
mv "app/academic/time-table/bpharm" "app/bpharm-time-table"
mv "app/academic/time-table/pharmd" "app/pharmd-time-table"
mv "app/academic/time-table/mpharm" "app/mpharm-time-table"

# Move cos-pos pages
mv "app/academic/cos-pos/bpharm" "app/bpharm-cos-pos"
mv "app/academic/cos-pos/mpharm" "app/mpharm-cos-pos"
mv "app/academic/cos-pos/pharmd" "app/pharmd-cos-pos"

# Move committee pages
mv "app/committee/various-committees" "app/various-committees"
mv "app/committee/sports-committee" "app/sports-committee"
mv "app/committee/discipline-committee" "app/discipline-committee"
mv "app/committee/anti-ragging-committee" "app/anti-ragging-committee"
mv "app/committee/malpractice-prevention-committee" "app/malpractice-prevention-committee"
mv "app/committee/internal-complaints-committee" "app/internal-complaints-committee"
mv "app/committee/cultural-committee" "app/cultural-committee"
mv "app/committee/student-grievance-redressal-committee" "app/student-grievance-redressal-committee"
mv "app/committee/equal-opportunity-cell" "app/equal-opportunity-cell"
mv "app/committee/sedg-cell" "app/sedg-cell"

# Move facilities pages
mv "app/facilities/class-room" "app/class-room"
mv "app/facilities/seminar-hall" "app/seminar-hall"
mv "app/facilities/lab" "app/lab"
mv "app/facilities/central-facilities" "app/central-facilities"
mv "app/facilities/library" "app/library"
mv "app/facilities/internship-opportunities" "app/internship-opportunities"
mv "app/facilities/hostel" "app/hostel"
mv "app/facilities/sports" "app/sports"
mv "app/facilities/food-court" "app/food-court"
mv "app/facilities/transport" "app/transport"
mv "app/facilities/health-facilities" "app/health-facilities"
mv "app/facilities/ambulance-services" "app/ambulance-services"
mv "app/facilities/wifi" "app/wifi"
mv "app/facilities/bank-post-office" "app/bank-post-office"
mv "app/facilities/nss" "app/nss"
mv "app/facilities/animal-house" "app/animal-house"
mv "app/facilities/barrier-free-environment" "app/barrier-free-environment"

# Move nirf pages
mv "app/nirf/nirf-2024" "app/nirf-2024"
mv "app/nirf/nirf-2025" "app/nirf-2025"

# Move others pages
mv "app/others/best-practice" "app/best-practice"
mv "app/others/competitive-examination" "app/competitive-examination"
mv "app/others/digital-campus" "app/digital-campus"
mv "app/others/drug-information-center" "app/drug-information-center"
mv "app/others/national-innovation-startup-policy" "app/national-innovation-startup-policy"
mv "app/others/institutions-innovation-council" "app/institutions-innovation-council"
mv "app/others/incubation-centre" "app/incubation-centre"
mv "app/others/entrepreneurship-development-cell" "app/entrepreneurship-development-cell"
mv "app/others/feedback-analysis" "app/feedback-analysis"
mv "app/others/ipa-bhavani-kumarapalayam" "app/ipa-bhavani-kumarapalayam"
mv "app/others/privacy-policy" "app/privacy-policy"
mv "app/others/audit-statements-finance" "app/audit-statements-finance"
mv "app/others/newsletters" "app/newsletters"

# Move social work activities pages
mv "app/others/social-work-activities/youth-red-cross" "app/youth-red-cross"
mv "app/others/social-work-activities/red-ribbon-club" "app/red-ribbon-club"
mv "app/others/social-work-activities/nss-social" "app/nss-social" 2>/dev/null || mv "app/others/social-work-activities/nss" "app/nss-social"

# Move placement pages
mv "app/placement/details/placement-cell" "app/placement-cell"
mv "app/placement/details/corporate-relations" "app/corporate-relations"
mv "app/placement/details/campus-recruitment" "app/campus-recruitment"

# Move disclosure pages
mv "app/disclosures/ugc-public-disclosure-compliance" "app/ugc-public-disclosure-compliance"
mv "app/disclosures/undertaking" "app/undertaking"

# Move programs pages
mv "app/programs/ug-program/b-pharmacy" "app/b-pharmacy"
mv "app/programs/ug-program/b-pharmacy-lateral-entry" "app/b-pharmacy-lateral-entry"
mv "app/programs/pg-program/pharm-d" "app/pharm-d"
mv "app/programs/pg-program/m-pharmacy/pharmacology" "app/pharmacology"
mv "app/programs/pg-program/m-pharmacy/pharmaceutical-analysis" "app/pharmaceutical-analysis"
mv "app/programs/pg-program/m-pharmacy/pharmaceutical-chemistry" "app/pharmaceutical-chemistry"
mv "app/programs/pg-program/m-pharmacy/pharmacy-practice" "app/pharmacy-practice"
mv "app/programs/pg-program/m-pharmacy/pharmaceutics" "app/pharmaceutics"
mv "app/programs/phd" "app/phd"

echo "All pages moved successfully!"
