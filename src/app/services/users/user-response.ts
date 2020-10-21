export interface UserResponse {

    code: number,
    meta: {
        pagination: {
            total: number;
            pages: number;
            page: number;
            limit: number;
        }
    },
    data: {
        id: number;
        name: string;
        email: string;
        gender: string;
        status: string;
        created_at: Date;
        updated_at: Date;
    }[];
    
}
