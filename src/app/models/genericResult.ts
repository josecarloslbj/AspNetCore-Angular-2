export class GenericSimpleResult {
    public erros: string[];
    public success: boolean;
}


export class GenericResult<TResult> extends GenericSimpleResult {
    public result: TResult;
}