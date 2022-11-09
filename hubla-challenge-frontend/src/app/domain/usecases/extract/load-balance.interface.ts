export interface LoadBalance {
  load: () => Promise<LoadBalance.Response>;
}

export namespace LoadBalance {
  export type Response = {
    entries: number;
    outputs: number;
  };
}
