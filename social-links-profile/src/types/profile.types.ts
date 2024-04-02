type Profile = {
    avatar: string | undefined,
    name: string | undefined,
    location: string | undefined,
    role: string | undefined,
    socialLinks: Social[] | undefined
};

type Social = {
    platform: string | undefined,
    link: string | undefined,
    text: string | undefined,
    id: string
}

export type { Profile, Social };