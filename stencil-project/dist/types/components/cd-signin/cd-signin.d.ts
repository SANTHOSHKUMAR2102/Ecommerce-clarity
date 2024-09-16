export declare class CdSignin {
    userName: string;
    mobileNumber: string;
    userID: string;
    userPassword: string;
    confirmPassword: string;
    nameError: string;
    mobileNumberError: string;
    userIdError: string;
    passwordError: string;
    nameValidation(event: Event): boolean;
    mobileValidation(event: Event): boolean;
    userIDValidation(event: Event): boolean;
    passwords(event: Event): boolean;
    passwordValidation(event: Event): boolean;
    onsubmit(): void;
    stroreDetails(name: string, mobile: string, Id: string, password: string): void;
    validateRegister(id: string): boolean;
    render(): any;
}
