import { Injectable } from "@angular/core";

export interface ToastOptions {
  timeOut?: number;
}

export interface ToastMessage {
  id: number;
  header: string | null;
  body: string;
  classname: string;
  delay: number;
}

@Injectable({ providedIn: "root" })
export class ToastService {
  toasts: ToastMessage[] = [];
  private nextId = 0;

  success(body: string, header: string | null = null, options?: ToastOptions) {
    this.show(body, header, "bg-success text-light", options);
  }

  error(body: string, header: string | null = null, options?: ToastOptions) {
    this.show(body, header, "bg-danger text-light", options);
  }

  info(body: string, header: string | null = null, options?: ToastOptions) {
    this.show(body, header, "bg-info text-light", options);
  }

  remove(toast: ToastMessage) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  private show(body: string, header: string | null, classname: string, options?: ToastOptions) {
    this.toasts.push({
      id: this.nextId++,
      header,
      body,
      classname,
      delay: options?.timeOut ?? 5000,
    });
  }
}
