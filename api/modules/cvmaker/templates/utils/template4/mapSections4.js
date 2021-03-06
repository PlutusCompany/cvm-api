import { calculateLevelPrecent } from '../../../../../utils/calculateLevel';
import getDate from '../../../../../utils/getDate';
import sortByOrder from '../../../../../utils/sortByOrder';

export const mapExperience4 = (experiences) => {
    let result = '';

    experiences = sortByOrder(experiences);

    // experiences = sortByOrder(experiences);

    if (experiences?.profileData) {
        result = result.concat(`
            <div class="section_head row mx-auto">
            <span>${experiences?.profileData.title}</span>
            </div>
            <hr />

            <div class="objectives_text mx-auto">
                ${experiences?.profileData.value}
            </div>
                 `);

        delete experiences?.profileData;
    }

    for (const key in experiences) {
        switch (key) {
            case 'languages':
            case 'interests':
                break;
            // -------------------------------------------------------------------------------------------------
            // Education & Work & Courses
            // -------------------------------------------------------------------------------------------------

            case 'educationAndSkills':
            case 'workExperience':
            case 'courses':
                if (experiences[key]?.pageBreak)
                    result = result.concat(`<div style="page-break-before: always;"></div>`);

                result = result.concat(`
                <div class="section_head row mx-auto">
                <span>${experiences[key].title}</span>
              </div>
              <hr />
                `);

                experiences[key].value.map((val) => {
                    result = result.concat(`
                    <div style="margin-bottom: 20px" class="mx-auto">
                        <div class="experience_head">
                            <span class="exp_bold">${val.main.val}</span>
                            <span>${getDate(val.start_date.val)} - ${getDate(val.end_date.val)}</span>
                        </div>
                        <div class="experience_info">
                            ${val.third.val}, <i>${val.second.val}</i>
                        </div>
                        <div class="experience_info">${val.textEditor.val}</div>
                    </div>
                    `);
                });
                break;

            // -------------------------------------------------------------------------------------------------
            // References
            // -------------------------------------------------------------------------------------------------

            case 'references':
                if (experiences[key]?.pageBreak)
                    result = result.concat(`<div style="page-break-before: always;"></div>`);

                result = result.concat(`<div class="section_head row mx-auto">
                <span>${experiences[key].title}</span>
              </div>
              <hr />`);

                experiences[key].value.map((val) => {
                    result = result.concat(`
                    <div style="margin-bottom: 20px" class="mx-auto">
                        <div class="experience_head">
                            <span class="exp_bold">${val.contact_person.val}</span>
                            <span>${val.main.val}</span>
                        </div>
                        <div class="experience_info">${val.third.val}</div>
                        <div class="experience_info">${val.fourth.val}</div>
                    </div>
                    `);
                });
                break;

            // -------------------------------------------------------------------------------------------------
            // Skills
            // -------------------------------------------------------------------------------------------------

            case 'skills':
                if (experiences[key]?.pageBreak)
                    result = result.concat(`<div style="page-break-before: always;"></div>`);

                result = result.concat(`<div class="section_head row mx-auto">
                <span>${experiences[key].title}</span>
              </div>
              <hr />`);

                experiences[key].value.map((val) => {
                    const lvl = calculateLevelPrecent(val.levels.index);

                    result = result.concat(`
                    <div class="skill_row">
                        <span>${val.main.val}</span>
            
                        <div class="skill_level">
                            <div style="width: ${lvl}%" class="skill_meter color_main_bg"></div>
                        </div>
                    </div>
                    `);
                });
                break;

            default:
                if (experiences[key]?.pageBreak)
                    result = result.concat(`<div style="page-break-before: always;"></div>`);

                result = result.concat(`
                <div class="section_head row mx-auto">
                <span>${experiences[key].title}</span>
              </div>
              <hr />

                <div class="objectives_text mx-auto">
                    ${experiences[key].value}
                </div>
                 `);
                break;
        }
    }
    return result;
};

export const mapPersonal4 = (personal, experience) => {
    let result = '';

    result = result.concat(`<div class="personal_data mx-auto">`);
    for (const key in personal) {
        result = result.concat(`
              <div class="exp_bold">${personal[key].title}</div>
              <div style="margin-bottom: 16px">${personal[key].value}</div>
        `);
    }
    result = result.concat(`</div>`);

    if (experience['interests']) {
        let items = '';
        experience['interests'].value.map(
            (val) => (items = items.concat(`<div class="exp_bold">${val.main.val}</div>`))
        );

        result = result.concat(`
        <div class="section_head left_head row mx-auto">
        <span>${experience['interests'].title}</span>
      </div>
      <hr style="background-color: white; margin-top: 0" />  

      <div class="personal_data mx-auto">
        ${items}
      </div>
        `);
    }

    if (experience['languages']) {
        result = result.concat(`
            <div class="section_head left_head row mx-auto">
            <span>${experience['languages'].title}</span>
          </div>
          <hr style="background-color: white; margin-top: 0" />
        `);

        experience['languages'].value.map((val) => {
            result = result.concat(`
            <div class="skill_row experience_head">
              <span>${val.main.val}</span>
              <div class="lang_level">${val.levels.val}</div>
            </div>
            `);
        });
    }

    return result;
};
