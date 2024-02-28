export const editSection = (index, title, info, infos) => {
    let updatedInfoSections = [...infos];

    for(const section of updatedInfoSections) {
        if(section.index === index) {
            section.title = title;        
            section.info = info;
        }
    }

    return {
        updatedInfoSections: updatedInfoSections,
    }
}

export const deleteSection = (index, infos) => {
    let updatedInfoSections = [...infos];

    for(const section of updatedInfoSections) {
        if(section.index === index) {

        }
    }
}
