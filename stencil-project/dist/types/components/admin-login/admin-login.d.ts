export declare class AdminLogin {
    adminID: string;
    adminPassword: string;
    passwordError: string;
    adminId(event: Event): void;
    Password(event: Event): void;
    onsubmit(event: Event): void;
    validateadminDetails(adminID: string, password: string): void;
    render(): any;
}
