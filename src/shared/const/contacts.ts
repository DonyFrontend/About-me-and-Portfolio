import { ContactSchemaArray } from "@/pages/contacts/model/types/contacts-schema";
import github_dark from './contactIcons/github_dark.svg';
import github_light from './contactIcons/github_light.svg';
import telegram_dark from './contactIcons/telegram_dark.svg';
import telegram_light from './contactIcons/telegram_light.svg';
import instagram_dark from './contactIcons/instagram_dark.svg';
import instagram_light from './contactIcons/instagram_light.svg';
import linked_dark from './contactIcons/linkedin_dark.svg';
import linked_light from './contactIcons/linkedin_light.svg';

const contacts: ContactSchemaArray = [
    {
        href: "https://github.com/DonyFrontend",
        icon_dark: github_dark,
        icon_light: github_light
    },
    {
        href: "https://t.me/dfriskb",
        icon_dark: telegram_dark,
        icon_light: telegram_light
    },
    {
        href: "https://www.instagram.com/dfriskb/profilecard/?igsh=MXlqOHVnZGV3Ymlj",
        icon_dark: instagram_dark,
        icon_light: instagram_light
    },
    {
        href: "https://www.linkedin.com/in/samir-abramov-dony",
        icon_dark: linked_dark,
        icon_light: linked_light
    },
]

export default contacts;