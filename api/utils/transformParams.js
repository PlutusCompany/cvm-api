const transformParams = (personalInfo, experience, template) => {
    const name = template.title;
    const params = {
        personalInfo,
        experience,
        template,
    };

    params.personalInfo = {
        name: { value: `${params.personalInfo.firstName.value} ${params.personalInfo.lastName.value}`, title: 'name' },
        ...params.personalInfo,
        address: {
            value: `${params.personalInfo.address.value}, ${params.personalInfo.postcode.value} ${params.personalInfo.city.value}`,
            title: 'address',
        },
    };

    delete params.personalInfo.city;
    delete params.personalInfo.postcode;
    delete params.personalInfo.firstName;
    delete params.personalInfo.lastName;
    delete params.personalInfo.avatarImage;
    delete params.personalInfo.rawImage;

    return { name, params };
};

export default transformParams;
