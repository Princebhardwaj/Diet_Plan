import { Link } from "react-router-dom";

export function HamBurger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

export function HomeLogo() {
  return (
    <img
      src={`./homepage_logo.png`}
      alt="Logo"
      style={{ cursor: "pointer", width: "50px", height: "auto" }}
    />
  );
}

export function DietFormLogo() {
  return (
    <img
      className="mx-auto h-12 w-auto"
      src={`./diet_form_logo.png`}
      alt="Logo"
      style={{ cursor: "pointer", width: "120px", height: "auto" }}
    />
  );
}

export function LoginLogo() {
  return (
    <img
      className="mx-auto h-12 w-auto"
      src={`./security.png`}
      alt="Logo"
      style={{ cursor: "pointer", width: "120px", height: "auto" }}
    />
  );
}

export function UserLogo() {
  return (
    <img
      className="mx-auto "
      src={`./hacker.png`}
      alt="Logo"
      style={{ cursor: "pointer", width: "22px", height: "auto" }}
    />
  );
}

export function SearchLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CaretUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
}
