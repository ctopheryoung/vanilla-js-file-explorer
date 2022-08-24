import { formatDate, formatSize } from "../js/helpers.js";

describe("formatDate", () => {
  test("formats a date object into the expected format", () => {
    expect(formatDate(new Date("2022-08-24T01:23:52.535Z"))).toEqual(
      "8/23/2022"
    );
  });
});

describe("formatSize", () => {
  test("returns an empty string when 0 is passed", () => {
    expect(formatSize(0)).toEqual("");
  });
  test("returns an empty string when '0' is passed", () => {
    expect(formatSize(0)).toEqual("");
  });

  test("returns the correct number of bytes", () => {
    expect(formatSize(208)).toEqual("208 Bytes");
  });

  test("returns 1 KB when passed 1024", () => {
    expect(formatSize(1024)).toEqual("1 KB");
  });

  test("returns 1.21 KB when passed 1234", () => {
    expect(formatSize(1234)).toEqual("1.21 KB");
  });

  test("returns 1.21 KB when passed '1234'", () => {
    expect(formatSize("1234")).toEqual("1.21 KB");
  });
});
