import { Signer, Umi } from "@metaplex-foundation/umi";


export interface RavoloSDKConfig {
  solanaEndpoint: string;
}

export interface Connection {
  endpoint: string;
}

export interface Developer {
  public_key: string;
  username: string;
  email?: string;
}

interface ICreateGame {
  developerId: string;
  gameName: string;
  game_icon?: string;
  description?: string;
  websiteUrl?: string;
}

export interface ICreateCollection {
  name: string;
  uri: string;
  description: string;
  tradeable: boolean
}

export interface ICreateAsset {
  asset: Signer;
  name: string;
  description: string;
  externalURL: string;
  imageURL: string;
  metadata: {
    [key: string]: any;
  };
}

export interface IAssetRegistry {
  createAsset(name: string, symbol: string, uri: string): Promise<any>;
  evolveAsset(assetId: string, newUri: string): Promise<void>;
  transferAsset(assetId: string, toPublicKey: string): Promise<void>;
}
