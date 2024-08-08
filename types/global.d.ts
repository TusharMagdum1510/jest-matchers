// types/global.d.ts
import "@testing-library/jest-dom";

declare global {
  namespace jest {
    interface Matchers<R> {
      toContainRole(role: string, quatity?: number): R;
    }
  }
}
