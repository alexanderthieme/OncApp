
# OncApp

> 😷 Solution for assessing electronic patient reported outcomes (ePROs) for cancer patients receiving radiotherapy.

OncApp can help users to assess their medical condition better or provide recommendations regarding doctor’s visits.

Additionally, every filled out questionnaire summarizes relevant medical information for future doctor’s consultation in the form of a summary page, printout or a QR code. Institutions with the technical setup can scan the provided QR code and retrieve the patient information quickly and without any physical contact.

By implementing the OncApp, any medical institution can reduce the number of new incoming patients, avoid physical contact and speed up the patient registration process.

---

This repository holds a white-labeled version of the original application, free to use licensed under [MIT License](#license). Application logic, print functionality and QR code generation are still provided.

The application and underlying questionnaire logic [are versioned and future updates will be provided](#application-updates).

⚠️ **Any institution/doctor’s office is free to implement OncApp on their domains – the medical responsibility and legal liability lie with the implementing institution.**

⚠️ **This application is only meant to be set up by software developers. Unfortunately, we can't provide a non-technical solution now.**

## Technical overview

The application runs dynamically in the browser. **It can be built and deployed to any service that provides a static web server with custom routing**.

It is based on a JavaScript software stack and uses the following technologies:

- [Stencil](https://stenciljs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [WebComponents](https://www.webcomponents.org/)

## Installation and development

To get further information on how to set up and deploy your custom OncApp application, see the [development documentation](./docs/DEVELOPMENT.md).

## Customization

The OncApp provides the following customization options:

- change words or add a new language

⚠️ **Note that there are several placeholder texts you must provide yourself.**

⚠️ **Note that the default fallback language is English (en) and it has to be available.**

- change colors
- change the application logo

To learn more about these options, see the [customization documentation](./docs/CUSTOMIZATION.md).

## Support and contributing

Before you open an issue, see the [customization documentation](./docs/CUSTOMIZATION.md).

## Application updates

As long as your are staying withing the guards set by the [customization documentation](./docs/CUSTOMIZATION.md) you can easily pull updates from this repository. [GitHub provides documentation on how to sync forks](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork).

## Code of conduct

[Contributor Code of Conduct](./CODE-OF-CONDUCT.md). By participating in this project, you agree to abide by its terms.
