// IndexNow key for www.hrtwomen.com. Not a secret in the credential
// sense - the protocol requires it to be publicly served at /<key>.txt so
// engines can verify we own the host; it only authorizes submitting THIS
// host's URLs. Rotate by minting a new hex string, updating here, and
// renaming the public key file to match.
export const INDEXNOW_KEY = "52ade3fe789d097f6c99f3a9a8e5711aca6816ad9f65ebadcfb82c676dcd328c";
export const INDEXNOW_HOST = "www.hrtwomen.com";
