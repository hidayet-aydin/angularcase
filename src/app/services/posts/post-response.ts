export interface PostResponse {

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
        user_id: number;
        title: string;
        body: string;
        created_at: Date;
        created_at_str: string;
        updated_at: Date;
    }[];

}
