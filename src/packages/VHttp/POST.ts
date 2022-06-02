import {HTTP} from '@/packages/VHttp/http';
import {ExceptionMessages} from '@/packages/VHttp/exceptions/exception.messages';
import {IHttpConfig} from '@/packages/VHttp/types/config';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Observable, of, throwError} from 'rxjs';
import {injectable} from 'tsyringe';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorResponse, HttpResponse} from '@/packages/VHttp/models/http.model';

@injectable()
export class POST extends HTTP {
  private readonly method = 'post';
  constructor() {
    super();
  }

  /**
   * Set URL of API
   * @description Sets URL of API Call.
   * @param url: string
   * @returns this
   */
  public setApi(url: string): this {
    return super.setApi(url);
  }

  /**
   * Get URL of API
   * @returns string;
   * @protected
   */
  protected getApi(): string {
    const api = super.getApi();
    if (!api) {
      console.warn(ExceptionMessages.SETAPI);
    }
    return api ? api : '/';
  }

  /**
   * Set Configs for HTTP Call
   * @param params: IHttpConfig
   * @returns this
   */
  public setConfigs(params: IHttpConfig): this {
    return super.setConfigs(params);
  }

  /**
   * Get Config data http call
   * @returns IHttpConfig
   * @protected
   */
  protected getConfigs(): IHttpConfig {
    return super.getConfigs();
  }

  /**
   * Set Headers for HTTP Call
   * @param headers
   * @returns this
   */
  public setHeaders(headers: any): this {
    return super.setHeaders(headers);
  }

  /**
   * Get Headers for HTTP Call
   * @returns Headers which set earlier with `setHeaders()` method
   * @protected
   */
  protected getHeaders(): any {
    return super.getHeaders();
  }
  /**
   * Set Query Parameters to HTTP Call
   * @param params
   * @returns this
   */
  public setParams(params: any): this {
    return super.setParams(params);
  }

  /**
   * Get Query Parameters for Http Call which filled earlier
   * @protected
   */
  protected getParams(): any {
    return super.getParams();
  }
  /**
   * Set Request Payload
   * @param params
   * @returns this
   */
  public setPayload(payload: any): this {
    return super.setPayload(payload);
  }

  /**
   * Get Request Payload
   * @protected
   */
  protected getPayload(): any {
    return super.getPayload();
  }

  /**
   * Make Request
   * @description Returns Response with Observable
   * @returns Observable
   */
  public request(): Observable<HttpResponse> {
    return fromPromise(this.populateRequest()).pipe(
      map(res => new HttpResponse(res)),
      catchError((err: Error) => throwError(new HttpErrorResponse(err))),
    );
  }

  /**
   * Make Request
   * @description Returns Response with Promise
   * @returns Promise
   */
  public requestPromise(): Promise<any> {
    return this.populateRequest();
  }

  /**
   * Populate Request and send
   * @returns Promise
   * @private
   */
  private populateRequest(): Promise<any> {
    return this.makeRequest({
      method: this.method,
      url: this.getApi(),
      params: this.getParams(),
      data: this.getPayload(),
      headers: this.getHeaders(),
      ...this.getConfigs(),
    });
  }
}
