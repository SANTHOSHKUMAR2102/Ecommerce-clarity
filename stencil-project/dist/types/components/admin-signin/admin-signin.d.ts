export declare class AdminSignin {
    adminName: string;
    mobileNumber: string;
    adminID: string;
    adminPassword: string;
    confirmPassword: string;
    nameError: string;
    mobileNumberError: string;
    adminIdError: string;
    passwordError: string;
    nameValidation(event: Event): boolean;
    mobileValidation(event: Event): boolean;
    adminIDValidation(event: Event): boolean;
    passwords(event: Event): boolean;
    passwordValidation(event: Event): boolean;
    onsubmit(): void;
    stroreDetails(name: string, mobile: string, Id: string, password: string): void;
    validateRegister(id: string): boolean;
    render(): any;
}
