export interface IDelete {
    email: string;
    currentPassword?: string;
}

export interface IDialogData {
    isAdmin: boolean;
    email: string;
}

export interface IEmailChange {
    email: string;
    password?: string;
    newEmail: string;
}

export interface ILanguageChange {
    id: string;
    language: string;
}

export interface INameChange {
    email: string;
    name: string;
}

export interface IPasswordChange {
    email: string;
    currentPassword: string;
    newPassword: string;
}

export interface IRoleChange {
    email: string;
    role: string;
}
