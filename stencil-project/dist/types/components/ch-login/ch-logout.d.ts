export declare class ChLogin {
    userID: string;
    userPassword: string;
    userId(event: Event): void;
    Password(event: Event): void;
    onsubmit(event: Event): void;
    validateUserDetails(userID: string, password: string): void;
    render(): any;
}
