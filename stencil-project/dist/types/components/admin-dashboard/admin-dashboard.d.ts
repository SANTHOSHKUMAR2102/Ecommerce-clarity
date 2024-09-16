export declare class AdminDashboard {
    open: boolean;
    product: boolean;
    btn: boolean;
    userData: any[];
    productsList: any[];
    editingProductIndex: number;
    editImage: string;
    cardOpen(): void;
    pOpen(): void;
    componentWillLoad(): void;
    getUserData(): void;
    getproductsList(): void;
    removeData(index: number): void;
    removeproductsList(index: number): void;
    handleInputChange(event: Event, field: string, index: number): void;
    editproductsList(index: number): void;
    render(): any;
}
