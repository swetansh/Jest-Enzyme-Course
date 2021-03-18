import moxios from "moxios";
import { correctGuess, actionTypes } from "./index";
import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "./";

describe("correctGuess", () => {
  test('should return an action with type "CORRECT_GUESS"', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

describe("getSecretWord action creater", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("should add response word to state", () => {
    const secretWord = "party";
    let store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
  });
});
