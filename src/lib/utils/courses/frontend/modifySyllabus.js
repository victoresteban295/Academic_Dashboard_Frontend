export const editSection = (index, title, info, infos) => {
    let updatedInfoSections = [...infos];

    //Create New Syllabus Section
    if(index === "") {
        //Each Course is Limited to 15 Syllabus Section
        if(infos.length < 15) {
            const newSection = {
                index: infos.length.toString(),
                title: title,
                info: info,
            }
            updatedInfoSections.push(newSection);

        } else {
            throw new Error("Syllabus Section Limit Exceeded: 15");
        }

    //Edit Existing Syllabus Section
    } else {
        for(const section of updatedInfoSections) {
            if(section.index === index) {
                section.title = title;        
                section.info = info;
            }
        }
    }

    return {
        updatedInfoSections: updatedInfoSections,
    }
}

export const deleteSection = (index, infos) => {

    //Filter out Section Getting Deleted
    let updatedInfoSections = infos.filter(section => {
        return section.index != index;
    })

    //Update the index on each Section
    for(let i = 0; i < updatedInfoSections.length; i++) {
        updatedInfoSections[i].index = i.toString();
    }

    return {
        updatedInfoSections: updatedInfoSections,
    }
}
