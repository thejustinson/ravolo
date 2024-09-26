import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  generateSigner,
  createSignerFromKeypair,
  Umi,
  Signer,
} from "@metaplex-foundation/umi";
import { mplCore } from "@metaplex-foundation/mpl-core";

export function ensureUint8Array(
  data: ArrayBuffer | Uint8Array | number[]
): Uint8Array {
  if (data instanceof Uint8Array) return data;
  if (data instanceof ArrayBuffer) return new Uint8Array(data);
  if (Array.isArray(data)) return new Uint8Array(data);
  throw new Error("Invalid input type");
}

export class Connection {
  private umi: Umi | null = null;

  connect(endpoint: string): Umi {
    if (!this.umi) {
      this.umi = createUmi(endpoint, "finalized").use(mplCore());
    }
    return this.umi;
  }

  createNewKeyPair(umi: Umi): Signer {
    return generateSigner(umi);
  }

  useExistingKeypair(umi: Umi, secretKey: ArrayBuffer | Uint8Array | number[]): Signer {
    const keypair = umi.eddsa.createKeypairFromSecretKey(ensureUint8Array(secretKey));
    return createSignerFromKeypair(umi, keypair)
  }

  static getInstance(): Connection {
    return new Connection();
  }
}