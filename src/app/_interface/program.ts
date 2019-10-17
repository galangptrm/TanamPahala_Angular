// import { NG_FORM_SELECTOR_WARNING } from '@angular/forms/src/directives';

export interface IProgram {
    id: number,
    user_id: number,
    title: string,
    slug: string,
    excerpt :string,
    content : string,
    published_at : string,
    published : string,
    created_at : string,
    updated_at : string,
    metadata : string,
    summary : string,
    has_summary : boolean
}