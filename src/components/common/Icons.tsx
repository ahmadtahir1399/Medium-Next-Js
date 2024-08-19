import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string;
};
const Icons = {
  Twitter: (props: IconProps) => (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="currentColor"
      {...props}
      className={`fill-current ${props.className}`}
    >
      <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
    </svg>
  ),
  GitHub: (props: IconProps) => (
    <svg
      viewBox="0 0 438.549 438.549"
      fill="currentColor"
      className={`fill-current ${props.className}`}
      {...props}
    >
      <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
    </svg>
  ),
  Apple: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M18.52 8.23c-.1.09-2 1.18-2 3.62 0 2.82 2.4 3.82 2.48 3.84-.01.06-.38 1.37-1.27 2.7-.78 1.17-1.6 2.34-2.86 2.34-1.25 0-1.58-.75-3.02-.75-1.41 0-1.91.77-3.06.77-1.15 0-1.95-1.08-2.86-2.41A11.9 11.9 0 0 1 4 12.04C4 8.36 6.33 6.4 8.62 6.4c1.22 0 2.23.82 3 .82.73 0 1.86-.87 3.25-.87.52 0 2.4.05 3.65 1.88zm-4.31-3.45c.57-.7.98-1.67.98-2.65 0-.13-.01-.27-.04-.38-.93.04-2.04.64-2.7 1.44a4.2 4.2 0 0 0-1.02 2.58c0 .15.02.3.03.34.06.01.16.03.25.03.84 0 1.9-.58 2.5-1.36z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  Google: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      {...props}
      className={`fill-current ${props.className}`}
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  ),
  Facebook: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`fill-current ${props.className}`}
    >
      <path
        d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57V12h2.78l-.45 2.9h-2.33v6.98A10 10 0 0 0 22 12z"
        fill="#1877F2"
      ></path>
      <path
        d="M15.9 14.9l.44-2.9h-2.78v-1.87c0-.8.39-1.57 1.63-1.57h1.26V6.1s-1.14-.2-2.24-.2c-2.28 0-3.77 1.4-3.77 3.9V12H7.9v2.9h2.54v6.98a10.07 10.07 0 0 0 3.12 0V14.9h2.33z"
        fill="#fff"
      ></path>
    </svg>
  ),
  Mail: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current ${props.className}`}
      {...props}
    >
      <path
        d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
        fill="currentColor"
      />
    </svg>
  ),
  X: (props: IconProps) => (
    <svg
      width="24"
      className={`fill-current ${props.className}`}
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M13.35 10.93l5.53-6.43h-1.31l-4.8 5.59L8.92 4.5H4.5l5.8 8.45-5.8 6.74h1.31l5.08-5.9 4.05 5.9h4.42l-6.01-8.76zm-1.8 2.09l-.59-.84-4.68-6.7H8.3l3.77 5.4.6.85 4.9 7.02h-2.01l-4.01-5.73z"
        fill="#242424"
      ></path>
    </svg>
  ),
  SearchBarIcons: (props: IconProps) => (
    <svg
      width="17"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="search"
      className={`fill-current w-5 h-5 ${props.className}`}
    >
      <title id="search">Search Icon</title>
      <path
        d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
        stroke="currentColor"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  Claps: (props: IconProps) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.67 10.17l2.14 2.14c1.72 1.72 4.33 2.43 5.96.8a4.38 4.38 0 0 0 .76-5.38L10.7 4.25c-.35-.53-.85-1.22-1.33-.96-.5.26 0 1.56 0 1.56l.78 1.93-3.73-3.91C5.6 1.9 4.96 1.76 4.5 2.22c-.33.33-.26.85.48 1.6.5.5 1.89 1.95 1.89 1.95.17.18.08.49-.1.66-.09.1-.2.15-.34.16a.43.43 0 0 1-.31-.13l-2.8-2.87c-.35-.35-.8-.54-1.2-.15-.4.4-.27 1.06.11 1.44l2.69 2.67.06.06c.17.18.27.63.1.8-.2.2-.46.33-.69.28a.92.92 0 0 1-.44-.28S2.5 6.84 1.89 6.23c-.4-.4-.9-.33-1.23 0-.52.52.27 1.28 1.73 2.7.39.36.82.77 1.28 1.24zm8.47-7.22c.38-.3.95-.28 1.3.24l1.57 3a5 5 0 0 1-.48 5.24l-.03.04c-.21.27-.35.43-.74.61 1.38-1.85.96-3.47-.25-5.45l-1.57-2.75v-.04c-.02-.3-.04-.7.2-.9z"
        fill="#6B6B6B"
        className={`fill-current w-5 h-5 ${props.className}`}
      ></path>
    </svg>
  ),
};

export default Icons;
