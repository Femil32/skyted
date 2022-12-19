/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from "react";

export const ShareArrow = (props) => (
  <svg {...props} viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 9V1M8.5 1H0.5M8.5 1L1 8.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const PlayIcon = (props) => (
  <svg {...props} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.5" cx="40" cy="40" r="40" fill="white" />
    <g clipPath="url(#clip0_643_68)">
      <path d="M46.9079 40.5L37.5834 34.2832V46.7169L46.9079 40.5ZM51.2567 41.1067L35.7998 51.4113C35.69 51.4844 35.5624 51.5263 35.4307 51.5326C35.299 51.5389 35.168 51.5093 35.0517 51.4471C34.9354 51.3848 34.8382 51.2922 34.7704 51.1791C34.7026 51.0659 34.6668 50.9365 34.6667 50.8046V30.1955C34.6668 30.0636 34.7026 29.9342 34.7704 29.821C34.8382 29.7079 34.9354 29.6153 35.0517 29.553C35.168 29.4908 35.299 29.4612 35.4307 29.4675C35.5624 29.4738 35.69 29.5157 35.7998 29.5888L51.2567 39.8934C51.3566 39.96 51.4384 40.0502 51.4951 40.156C51.5517 40.2618 51.5813 40.38 51.5813 40.5C51.5813 40.6201 51.5517 40.7383 51.4951 40.8441C51.4384 40.9499 51.3566 41.0401 51.2567 41.1067Z" fill="black" />
    </g>
    <defs>
      <clipPath id="clip0_643_68">
        <rect width="35" height="35" fill="white" transform="translate(23 23)" />
      </clipPath>
    </defs>
  </svg>
);

export const RoundedPlus = (props) => (
  <svg {...props} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.3" clipPath="url(#clip0_643_191)">
      <path d="M12.8333 12.8335V8.16683H15.1667V12.8335H19.8333V15.1668H15.1667V19.8335H12.8333V15.1668H8.16667V12.8335H12.8333ZM14 25.6668C7.5565 25.6668 2.33333 20.4437 2.33333 14.0002C2.33333 7.55666 7.5565 2.3335 14 2.3335C20.4435 2.3335 25.6667 7.55666 25.6667 14.0002C25.6667 20.4437 20.4435 25.6668 14 25.6668ZM14 23.3335C16.4754 23.3335 18.8493 22.3502 20.5997 20.5998C22.35 18.8495 23.3333 16.4755 23.3333 14.0002C23.3333 11.5248 22.35 9.15084 20.5997 7.4005C18.8493 5.65016 16.4754 4.66683 14 4.66683C11.5246 4.66683 9.15067 5.65016 7.40034 7.4005C5.65 9.15084 4.66667 11.5248 4.66667 14.0002C4.66667 16.4755 5.65 18.8495 7.40034 20.5998C9.15067 22.3502 11.5246 23.3335 14 23.3335V23.3335Z" fill="#001432" />
    </g>
    <defs>
      <clipPath id="clip0_643_191">
        <rect width="28" height="28" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const RoundedMinus = (props) => (
  <svg {...props} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.3" clipPath="url(#clip0_643_188)">
      <path d="M12.8333 12.8335H15.1667H19.8333V15.1668H15.1667H12.8333H8.16667V12.8335H12.8333ZM14 25.6668C7.5565 25.6668 2.33333 20.4437 2.33333 14.0002C2.33333 7.55666 7.5565 2.3335 14 2.3335C20.4435 2.3335 25.6667 7.55666 25.6667 14.0002C25.6667 20.4437 20.4435 25.6668 14 25.6668ZM14 23.3335C16.4754 23.3335 18.8493 22.3502 20.5997 20.5998C22.35 18.8495 23.3333 16.4755 23.3333 14.0002C23.3333 11.5248 22.35 9.15084 20.5997 7.4005C18.8493 5.65016 16.4754 4.66683 14 4.66683C11.5246 4.66683 9.15067 5.65016 7.40034 7.4005C5.65 9.15084 4.66667 11.5248 4.66667 14.0002C4.66667 16.4755 5.65 18.8495 7.40034 20.5998C9.15067 22.3502 11.5246 23.3335 14 23.3335Z" fill="#001432" />
    </g>
    <defs>
      <clipPath id="clip0_643_188">
        <rect width="28" height="28" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// social icons
export const FacebookIcon = (props) => (
  <svg {...props} viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.05" width="50" height="50" rx="25" fill="#001432" />
    <g clipPath="url(#clip0_643_269)">
      <path
        d="M26 32.938C28.0173 32.6813 29.8611 31.6661 31.1568 30.0988C32.4525 28.5314 33.1027 26.5295
      32.9754 24.5C32.848 22.4704 31.9527 20.5655 30.4713 19.1724C28.9898 17.7793 27.0336 17.0025 25 17C22.964 16.9985 21.0039 17.7733 19.5193 19.1667C18.0347 20.56 17.1372 22.467 17.0097 24.499C16.8822 26.5311 17.5343 28.5353 18.8331 30.1033C20.132 31.6712 21.9797 32.685 24 32.938V27H22V25H24V23.346C24 22.009 24.14 21.524 24.4 21.035C24.6561 20.5512 25.052 20.1557 25.536 19.9C25.918 19.695 26.393 19.572 27.223 19.519C27.552 19.498 27.978 19.524 28.501 19.599V21.499H28C27.083 21.499 26.704 21.542 26.478 21.663C26.3431 21.7324 26.2334 21.8421 26.164 21.977C26.044 22.203 26 22.427 26 23.345V25H28.5L28 27H26V32.938ZM25 35C19.477 35 15 30.523 15 25C15 19.477 19.477 15 25 15C30.523 15 35 19.477 35 25C35 30.523 30.523 35 25 35Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_643_269">
        <rect width="24" height="24" fill="white" transform="translate(13 13)" />
      </clipPath>
    </defs>
  </svg>
);

export const InstagramIcon = (props) => (
  <svg {...props} viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.05" width="50" height="50" rx="25" fill="#001432" />
    <g clipPath="url(#clip0_643_270)">
      <path
        d="M25 22C24.2044 22 23.4413 22.3161 22.8787 22.8787C22.3161 23.4413 22 24.2044
      22 25C22 25.7956 22.3161 26.5587 22.8787 27.1213C23.4413 27.6839 24.2044 28 25 28C25.7956 28 26.5587 27.6839 27.1213 27.1213C27.6839 26.5587 28 25.7956 28 25C28 24.2044 27.6839 23.4413 27.1213 22.8787C26.5587 22.3161 25.7956 22 25 22ZM25 20C26.3261 20 27.5979 20.5268 28.5355 21.4645C29.4732 22.4021 30 23.6739 30 25C30 26.3261 29.4732 27.5979 28.5355 28.5355C27.5979 29.4732 26.3261 30 25 30C23.6739 30 22.4021 29.4732 21.4645 28.5355C20.5268 27.5979 20 26.3261 20 25C20 23.6739 20.5268 22.4021 21.4645 21.4645C22.4021 20.5268 23.6739 20 25 20V20ZM31.5 19.75C31.5 20.0815 31.3683 20.3995 31.1339 20.6339C30.8995 20.8683 30.5815 21 30.25 21C29.9185 21 29.6005 20.8683 29.3661 20.6339C29.1317 20.3995 29 20.0815 29 19.75C29 19.4185 29.1317 19.1005 29.3661 18.8661C29.6005 18.6317 29.9185 18.5 30.25 18.5C30.5815 18.5 30.8995 18.6317 31.1339 18.8661C31.3683 19.1005 31.5 19.4185 31.5 19.75V19.75ZM25 17C22.526 17 22.122 17.007 20.971 17.058C20.187 17.095 19.661 17.2 19.173 17.39C18.739 17.558 18.426 17.759 18.093 18.093C17.78 18.3954 17.5394 18.7646 17.389 19.173C17.199 19.663 17.094 20.188 17.058 20.971C17.006 22.075 17 22.461 17 25C17 27.474 17.007 27.878 17.058 29.029C17.095 29.812 17.2 30.339 17.389 30.826C17.559 31.261 17.759 31.574 18.091 31.906C18.428 32.242 18.741 32.443 19.171 32.609C19.665 32.8 20.191 32.906 20.971 32.942C22.075 32.994 22.461 33 25 33C27.474 33 27.878 32.993 29.029 32.942C29.811 32.905 30.338 32.8 30.826 32.611C31.259 32.442 31.574 32.241 31.906 31.909C32.243 31.572 32.444 31.259 32.61 30.829C32.8 30.336 32.906 29.809 32.942 29.029C32.994 27.925 33 27.539 33 25C33 22.526 32.993 22.122 32.942 20.971C32.905 20.189 32.8 19.661 32.61 19.173C32.4593 18.765 32.2191 18.396 31.907 18.093C31.6047 17.7798 31.2355 17.5392 30.827 17.389C30.337 17.199 29.811 17.094 29.029 17.058C27.925 17.006 27.539 17 25 17ZM25 15C27.717 15 28.056 15.01 29.122 15.06C30.187 15.11 30.912 15.277 31.55 15.525C32.21 15.779 32.766 16.123 33.322 16.678C33.8305 17.1779 34.224 17.7826 34.475 18.45C34.722 19.087 34.89 19.813 34.94 20.878C34.987 21.944 35 22.283 35 25C35 27.717 34.99 28.056 34.94 29.122C34.89 30.187 34.722 30.912 34.475 31.55C34.2247 32.2178 33.8311 32.8226 33.322 33.322C32.822 33.8303 32.2173 34.2238 31.55 34.475C30.913 34.722 30.187 34.89 29.122 34.94C28.056 34.987 27.717 35 25 35C22.283 35 21.944 34.99 20.878 34.94C19.813 34.89 19.088 34.722 18.45 34.475C17.7823 34.2245 17.1775 33.8309 16.678 33.322C16.1694 32.8222 15.7759 32.2175 15.525 31.55C15.277 30.913 15.11 30.187 15.06 29.122C15.013 28.056 15 27.717 15 25C15 22.283 15.01 21.944 15.06 20.878C15.11 19.812 15.277 19.088 15.525 18.45C15.7752 17.7822 16.1688 17.1773 16.678 16.678C17.1777 16.1692 17.7824 15.7757 18.45 15.525C19.088 15.277 19.812 15.11 20.878 15.06C21.944 15.013 22.283 15 25 15Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_643_270">
        <rect width="24" height="24" fill="white" transform="translate(13 13)" />
      </clipPath>
    </defs>
  </svg>
);

export const LinkedInIcon = (props) => (
  <svg {...props} viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.05" width="50" height="50" rx="25" fill="#001432" />
    <g clipPath="url(#clip0_643_271)">
      <path
        d="M25 22.55C25.917 21.613 27.111 21 28.5 21C29.9587 21 31.3576 21.5795
       32.3891 22.6109C33.4205 23.6424 34 25.0413 34 26.5V34H32V26.5C32 25.5717 31.6313 24.6815 30.9749 24.0251C30.3185 23.3687 29.4283 23 28.5 23C27.5717 23 26.6815 23.3687 26.0251 24.0251C25.3687 24.6815 25 25.5717 25 26.5V34H23V21.5H25V22.55ZM18 19.5C17.6022 19.5 17.2206 19.342 16.9393 19.0607C16.658 18.7794 16.5 18.3978 16.5 18C16.5 17.6022 16.658 17.2206 16.9393 16.9393C17.2206 16.658 17.6022 16.5 18 16.5C18.3978 16.5 18.7794 16.658 19.0607 16.9393C19.342 17.2206 19.5 17.6022 19.5 18C19.5 18.3978 19.342 18.7794 19.0607 19.0607C18.7794 19.342 18.3978 19.5 18 19.5ZM17 21.5H19V34H17V21.5Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_643_271">
        <rect width="24" height="24" fill="white" transform="translate(13 13)" />
      </clipPath>
    </defs>
  </svg>
);

export const LeftArrowIcon = (props) => (
  <svg {...props} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6H2M2 6L6.86956 1M2 6L6.86956 11" stroke="#1781B8" strokeWidth="2" />
  </svg>
);

export const YoutubeIcon = (props) => (
  <svg {...props} viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.05" width="50" height="50" rx="25" fill="#001432" />
    <g clipPath="url(#clip0_643_272)">
      <path
        d="M32.606 19.995C32.53 19.697 32.314 19.472 32.067 19.403C31.63 19.28 29.5 19
       25 19C20.5 19 18.372 19.28 17.931 19.403C17.687 19.471 17.471 19.696 17.394 19.995C17.285 20.419 17 22.196 17 25C17 27.804 17.285 29.58 17.394 30.006C17.47 30.303 17.686 30.528 17.932 30.596C18.372 30.72 20.5 31 25 31C29.5 31 31.629 30.72 32.069 30.597C32.313 30.529 32.529 30.304 32.606 30.005C32.715 29.581 33 27.8 33 25C33 22.2 32.715 20.42 32.606 19.995ZM34.543 19.498C35 21.28 35 25 35 25C35 25 35 28.72 34.543 30.502C34.289 31.487 33.546 32.262 32.605 32.524C30.896 33 25 33 25 33C25 33 19.107 33 17.395 32.524C16.45 32.258 15.708 31.484 15.457 30.502C15 28.72 15 25 15 25C15 25 15 21.28 15.457 19.498C15.711 18.513 16.454 17.738 17.395 17.476C19.107 17 25 17 25 17C25 17 30.896 17 32.605 17.476C33.55 17.742 34.292 18.516 34.543 19.498V19.498ZM23 28.5V21.5L29 25L23 28.5Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_643_272">
        <rect width="24" height="24" fill="white" transform="translate(13 13)" />
      </clipPath>
    </defs>
  </svg>
);

export const TwitterIcon = (props) => (
  <svg {...props} viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect opacity="0.05" width="50" height="50" rx="25" fill="#001432" />
    <g clipPath="url(#clip0_643_273)">
      <path
        d="M28.3 18.5501C27.54 18.55 26.8103 18.8482 26.2679 19.3807C25.7255 19.9131 25.4139 20.6372
       25.4 21.3971L25.372 22.9721C25.3704 23.0567 25.3509 23.1399 25.3148 23.2164C25.2787 23.2929 25.2269 23.3609 25.1626 23.416C25.0984 23.471 25.0233 23.5119 24.9422 23.5359C24.8611 23.5599 24.7758 23.5664 24.692 23.5551L23.131 23.3431C21.077 23.0631 19.109 22.1171 17.221 20.5441C16.623 23.8541 17.791 26.1471 20.604 27.9161L22.351 29.0141C22.434 29.0663 22.503 29.138 22.5518 29.223C22.6007 29.308 22.628 29.4036 22.6314 29.5016C22.6348 29.5996 22.614 29.6969 22.5711 29.785C22.5281 29.8731 22.4642 29.9494 22.385 30.0071L20.793 31.1701C21.74 31.2291 22.639 31.1871 23.385 31.0391C28.103 30.0971 31.24 26.5471 31.24 20.6911C31.24 20.2131 30.228 18.5501 28.3 18.5501V18.5501ZM23.4 21.3601C23.4175 20.3962 23.7189 19.4588 24.2666 18.6653C24.8142 17.8719 25.5838 17.2576 26.4789 16.8995C27.374 16.5413 28.3549 16.4552 29.2987 16.6519C30.2426 16.8485 31.1074 17.3193 31.785 18.0051C32.496 18.0001 33.101 18.1801 34.454 17.3601C34.119 19.0001 33.954 19.7121 33.24 20.6911C33.24 28.3331 28.543 32.0491 23.777 33.0001C20.509 33.6521 15.757 32.5811 14.395 31.1591C15.089 31.1051 17.909 30.8021 19.539 29.6091C18.16 28.7001 12.671 25.4701 16.278 16.7861C17.971 18.7631 19.688 20.1091 21.428 20.8231C22.586 21.2981 22.87 21.2881 23.401 21.3611L23.4 21.3601Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_643_273">
        <rect width="24" height="24" fill="white" transform="translate(13 13)" />
      </clipPath>
    </defs>
  </svg>
);

export const CloseIcon = (props) => (
  <svg {...props} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0.928786" y1="0.928933" x2="15.0709" y2="15.0711" stroke="white" strokeWidth="2" />
    <line y1="-1" x2="20" y2="-1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0.22168 14.364)" stroke="white" strokeWidth="2" />
  </svg>
);

export const TravellersIcon = (props) => (
  <svg {...props} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_643_77)">
      <path d="M25.0016 46.3861C36.8125 46.3861 46.3872 36.8115 46.3872 25.0005C46.3872 13.1896 36.8125 3.61499 25.0016 3.61499C13.1907 3.61499 3.61609 13.1896 3.61609 25.0005C3.61609 36.8115 13.1907 46.3861 25.0016 46.3861Z" fill="#72D8FF" />
      <path d="M38.1862 12.2732C35.701 12.2732 33.6865 14.2877 33.6865 16.7728C33.6865 17.6957 32.9381 18.4441 32.0152 18.4441C30.3822 18.4441 29.0583 19.7679 29.0583 21.4009V22.0438C29.0583 23.6768 30.3822 25.0006 32.0152 25.0006H46.3873C46.3873 20.2325 44.8262 15.8294 42.1881 12.2731C42.1881 12.2732 38.1862 12.2732 38.1862 12.2732Z" fill="#A0E557" />
      <path d="M28.7544 34.1255H27.7127C26.9486 34.1255 26.3294 33.506 26.3294 32.7422V28.5528C26.3294 26.5911 24.7392 25.0009 22.7774 25.0009H18.8268H17.185C15.8994 25.0009 14.8572 26.0429 14.8572 27.3286C14.8572 27.65 14.5967 27.9105 14.2753 27.9105H14.1884C12.2162 27.9105 10.6176 29.5093 10.6177 31.4814V31.4818C10.6178 33.4538 12.2164 35.0523 14.1884 35.0523H15.6391C16.6533 35.0523 17.4757 35.8746 17.4757 36.8888C17.4758 38.5409 18.815 39.8801 20.467 39.8801H25.0212C26.6732 39.8801 28.0125 41.2193 28.0125 42.8714V46.1743C29.3039 45.9923 30.5585 45.6956 31.765 45.2937V37.1363C31.7651 35.4734 30.4172 34.1255 28.7544 34.1255Z" fill="#A0E557" />
      <path d="M25.7897 1.03878C26.0721 3.17012 25.3462 5.31153 23.8259 6.83174L20.833 9.82462L25.6457 19.8497L23.6649 21.8305L17.2332 13.4244L11.3997 19.2579H11.3853L11.7625 23.4423L9.36931 25.8356L7.56609 19.2625L0.993042 17.4594L3.3863 15.0661L7.57068 15.4433V15.4289L13.4042 9.59542L4.99792 3.16358L6.97869 1.18282L17.0039 5.99551L19.9968 3.00264C21.517 1.48233 23.6584 0.756452 25.7897 1.03878Z" fill="white" />
      <path d="M47.3517 2.65094C43.6371 -1.06361 36.7187 -0.815371 28.8191 3.03434C28.6526 3.06822 28.4993 3.14527 28.3729 3.25514C27.7442 3.57086 27.1096 3.90904 26.4703 4.26959C26.8028 3.19332 26.908 2.04586 26.7577 0.910703C26.6996 0.473106 26.3554 0.128867 25.9178 0.0708595C23.5015 -0.249258 21.0297 0.588633 19.3062 2.31227L16.8025 4.81598L7.40131 0.302695C7.02729 0.123301 6.58129 0.199375 6.28822 0.492539L4.30737 2.4732C4.10834 2.67223 4.00483 2.94742 4.02348 3.22828C4.04203 3.50904 4.181 3.76822 4.40453 3.93932L11.925 9.69352L7.19008 14.4286L3.47387 14.0937C3.18608 14.0676 2.90043 14.1711 2.69565 14.3757L0.302483 16.7688C0.0564868 17.0148 -0.0399976 17.3731 0.0489672 17.7092C0.13803 18.0455 0.399163 18.309 0.734612 18.401L3.41733 19.137C2.90141 21.0406 2.63949 23.0085 2.63949 25.0008C2.63949 26.3188 2.75649 27.6379 2.98471 28.9264C1.78061 31.4213 0.920354 33.8525 0.438518 36.1497C-0.580818 41.0103 0.184319 44.8836 2.6516 47.3508C4.39125 49.0906 6.90209 49.9993 9.94701 49.9993C10.1956 49.9993 10.4483 49.9932 10.7039 49.981C13.7686 49.8351 17.3468 48.8094 21.0672 47.016C22.3479 47.2442 23.6631 47.3631 25.0016 47.3631C29.5918 47.3631 34.0029 45.9825 37.7576 43.3704C38.2002 43.0624 38.3095 42.4539 38.0015 42.0111C37.6935 41.5683 37.0848 41.4592 36.6422 41.7671C34.3212 43.3818 31.725 44.4799 28.9891 45.0208V42.8716C28.9891 40.6838 27.209 38.9038 25.0211 38.9038H20.4669C19.3561 38.9038 18.4522 38 18.4521 36.8889C18.4519 35.3379 17.19 34.0759 15.6389 34.0759H14.1882C12.758 34.0759 11.5942 32.9123 11.5941 31.4815C11.5941 30.7884 11.8639 30.1371 12.3538 29.647C12.8438 29.157 13.4953 28.8871 14.1882 28.8871H14.2751C15.1346 28.8871 15.8336 28.1879 15.8336 27.3287C15.8336 26.5836 16.4398 25.9775 17.1847 25.9775H22.7773C24.1974 25.9775 25.3528 27.1329 25.3528 28.553V32.7423C25.3528 34.0435 26.4114 35.1022 27.7127 35.1022H28.7544C29.8761 35.1022 30.7887 36.0147 30.7887 37.1366V39.5012C30.7887 40.0406 31.226 40.4777 31.7652 40.4777C32.3044 40.4777 32.7416 40.0405 32.7416 39.5012V37.1366C32.7416 34.938 30.953 33.1492 28.7543 33.1492H27.7126C27.4882 33.1492 27.3057 32.9667 27.3057 32.7423V28.5529C27.3057 26.0558 25.2742 24.0245 22.7773 24.0245H17.1847C15.4934 24.0245 14.0948 25.302 13.9031 26.9427C12.7957 27.0108 11.7642 27.4747 10.9729 28.266C10.114 29.1249 9.64106 30.2669 9.64115 31.4819C9.64125 33.9891 11.6812 36.0288 14.1882 36.0288H15.6389C16.1131 36.0288 16.4992 36.4147 16.4992 36.8889C16.4993 39.0767 18.2792 40.8567 20.467 40.8567H25.0212C26.1323 40.8567 27.0362 41.7606 27.0362 42.8715V45.2754C27.0362 45.2868 27.0375 45.2979 27.0379 45.3093C26.3648 45.3758 25.6856 45.41 25.0017 45.41C15.3351 45.41 7.00307 38.6261 5.02914 29.2186C5.84994 27.5824 6.82123 25.9182 7.92514 24.263L8.42748 26.0941C8.51947 26.4296 8.78305 26.6908 9.11928 26.7797C9.20199 26.8016 9.28588 26.8123 9.36918 26.8123C9.62485 26.8123 9.87426 26.7118 10.0598 26.5262L12.4531 24.1331C12.6579 23.9283 12.7611 23.6432 12.7352 23.3548L12.4002 19.6387L17.1353 14.9037L22.8894 22.4243C23.0605 22.6478 23.3196 22.7867 23.6004 22.8052C23.8802 22.8235 24.1564 22.7204 24.3555 22.5213L26.3363 20.5406C26.6294 20.2474 26.7055 19.8011 26.526 19.4275L22.0128 10.0261L23.808 8.23102C25.6377 6.98092 27.4493 5.9108 29.2093 5.02662C33.5383 5.93277 37.3125 8.18629 40.1267 11.2969H38.1863C35.1667 11.2969 32.7101 13.7536 32.7101 16.7731C32.7101 17.1562 32.3985 17.4679 32.0153 17.4679C29.8463 17.4679 28.0819 19.2325 28.0819 21.4013V22.0442C28.0819 24.213 29.8463 25.9776 32.0153 25.9776H39.6538C40.193 25.9776 40.6302 25.5404 40.6302 25.0011C40.6302 24.4619 40.1929 24.0247 39.6538 24.0247H32.0153C30.9233 24.0247 30.0349 23.1363 30.0349 22.0443V21.4014C30.0349 20.3094 30.9234 19.4211 32.0153 19.4211C33.4752 19.4211 34.663 18.2333 34.663 16.7732C34.663 14.8305 36.2435 13.2501 38.1862 13.2501H41.0145C41.2192 13.2501 41.409 13.1868 41.566 13.0792C43.9968 16.4579 45.4108 20.5913 45.4108 25.0011C45.4108 28.378 44.5692 31.723 42.9771 34.675C42.7211 35.1497 42.8983 35.742 43.3731 35.9979C43.5205 36.0774 43.6793 36.1152 43.8358 36.1152C44.1832 36.1152 44.5197 35.9293 44.6962 35.602C46.4414 32.3663 47.3638 28.7005 47.3638 25.0011C47.3638 23.663 47.2449 22.3479 47.0165 21.0673C48.8116 17.3439 49.8374 13.7628 49.9822 10.6963C50.1417 7.31334 49.2322 4.53131 47.3517 2.65094ZM18.0007 46.24C11.8371 48.7229 6.72016 48.6575 4.03276 45.9699C1.53334 43.4706 1.73823 39.4681 2.35014 36.5506C2.65199 35.1118 3.12846 33.5885 3.76137 32.0171C5.99584 38.8047 11.3477 44.0463 18.0007 46.24ZM4.61205 25.8745C4.59975 25.5835 4.59272 25.2921 4.59272 25.0007C4.59272 23.1834 4.83119 21.3888 5.30092 19.6536L6.77143 20.057L7.25004 21.8014C6.28002 23.1623 5.39916 24.5234 4.61205 25.8745ZM19.9526 10.2474L24.4658 19.6488L23.7627 20.3518L18.0087 12.8312C17.8376 12.6077 17.5786 12.4688 17.2977 12.4503C17.0174 12.4317 16.7417 12.535 16.5426 12.7341L10.8015 18.4753C10.7524 18.5119 10.7064 18.5533 10.6645 18.5993C10.4794 18.8017 10.3881 19.0726 10.4127 19.3458L10.7488 23.0751L9.86645 23.9574L8.50785 19.0041C8.41664 18.6716 8.15688 18.4119 7.82446 18.3207L2.87123 16.9621L3.75356 16.0796L7.48285 16.4157C7.75688 16.4406 8.0269 16.3489 8.22934 16.1639C8.27524 16.122 8.31664 16.0762 8.35326 16.0271L14.0946 10.2858C14.2936 10.0868 14.3971 9.81158 14.3785 9.53072C14.3599 9.24996 14.2209 8.99078 13.9974 8.81969L6.4769 3.06559L7.17992 2.36256L16.5813 6.87574C16.9552 7.05514 17.4013 6.97906 17.6944 6.6859L20.6872 3.69303C21.7964 2.58375 23.3174 1.96207 24.872 1.95631C24.8662 3.5109 24.2445 5.03189 23.1353 6.14117L22.4799 6.79654C22.4797 6.79674 22.4795 6.79693 22.4794 6.79713L20.1423 9.13424C19.8493 9.4275 19.7731 9.87369 19.9526 10.2474ZM46.2403 18.001C44.0452 11.3463 38.7997 5.99137 32.009 3.75826C38.0775 1.31803 43.2487 1.30982 45.9706 4.03199C48.658 6.7192 48.7234 11.8371 46.2403 18.001Z" fill="#001432" />
      <path d="M41.6773 38.4359C41.2699 38.0714 40.6609 38.1089 40.2903 38.5212C40.2886 38.5231 40.2869 38.5249 40.2853 38.5268C39.9179 38.942 39.9501 39.5515 40.3588 39.9145C40.5461 40.0808 40.7753 40.1625 41.0042 40.1625C41.2751 40.1625 41.5457 40.0481 41.7456 39.8238C42.1144 39.4101 42.0846 38.8004 41.6773 38.4359Z" fill="#001432" />
    </g>
    <defs>
      <clipPath id="clip0_643_77">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const OfficeIcon = (props) => (
  <svg {...props} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_643_155)">
      <path d="M45.0302 22.5827V5.78479H20.8954V47.9382H45.0302V31.2051V22.5827Z" fill="#EAF0F0" />
      <path d="M4.5578 22.0132H20.8954V47.9383H4.5578V22.0132Z" fill="#EAF0F0" />
      <path d="M4.5578 17.9708H11.2872V22.0131H4.5578V17.9708Z" fill="#BFD8D8" />
      <path d="M24.5209 2.06189H41.6511V5.78484H24.5209V2.06189Z" fill="#BFD8D8" />
      <path d="M26.1783 11.2363H30.3179V15.3759H26.1783V11.2363Z" fill="#0DACFF" />
      <path d="M35.3304 11.2363H39.4699V15.3759H35.3304V11.2363Z" fill="#0DACFF" />
      <path d="M26.1783 19.7754H30.3179V23.9149H26.1783V19.7754Z" fill="#0DACFF" />
      <path d="M35.3304 19.7754H39.4699V23.9149H35.3304V19.7754Z" fill="#0DACFF" />
      <path d="M26.1783 28.3145H30.3179V32.454H26.1783V28.3145Z" fill="#0DACFF" />
      <path d="M35.3304 28.3145H39.4699V32.454H35.3304V28.3145Z" fill="#0DACFF" />
      <path d="M29.6968 38.8418H36.0647V47.9379H29.6968V38.8418Z" fill="#DC1F27" />
      <path d="M10.5003 42.4977H14.83V47.9378H10.5003V42.4977Z" fill="#DC1F27" />
      <path d="M49.0234 46.9618H46.0068V31.2051C46.0068 30.6659 45.5695 30.2286 45.0303 30.2286C44.491 30.2286 44.0537 30.6659 44.0537 31.2051V46.9618H37.0412V38.8418C37.0412 38.3026 36.6039 37.8653 36.0646 37.8653H29.6967C29.1574 37.8653 28.7201 38.3026 28.7201 38.8418V46.9618H21.8719V22.0131V6.76138H44.0537V22.5828C44.0537 23.122 44.491 23.5593 45.0303 23.5593C45.5695 23.5593 46.0068 23.122 46.0068 22.5828V5.78481C46.0068 5.24556 45.5695 4.80825 45.0303 4.80825H42.6276V2.06177C42.6276 1.52251 42.1903 1.08521 41.6511 1.08521H24.5209C23.9816 1.08521 23.5443 1.52251 23.5443 2.06177V4.80825H20.8954C20.3562 4.80825 19.9188 5.24556 19.9188 5.78481V21.0366H12.2637V17.9708C12.2637 17.4316 11.8264 16.9943 11.2871 16.9943H4.55781C4.01855 16.9943 3.58125 17.4316 3.58125 17.9708V22.0131V46.9618H0.976562C0.437305 46.9618 0 47.3991 0 47.9383C0 48.4776 0.437305 48.9149 0.976562 48.9149H49.0234C49.5627 48.9149 50 48.4776 50 47.9383C50 47.3991 49.5627 46.9618 49.0234 46.9618V46.9618ZM25.4975 3.03833H40.6746V4.80825H25.4975V3.03833ZM5.53438 18.9474H10.3105V21.0366H5.53438V18.9474ZM13.8534 46.9614H11.4768V43.4744H13.8534V46.9614ZM19.9188 46.9618H15.8066V42.4978C15.8066 41.9585 15.3693 41.5212 14.8301 41.5212H10.5003C9.96104 41.5212 9.52373 41.9585 9.52373 42.4978V46.9618H5.53438V22.9897H11.2871H19.9188V46.9618ZM35.0882 46.9614H30.6733V39.8183H35.0882V46.9614Z" fill="#001432" />
      <path d="M45.8418 26.461C45.3572 25.7348 44.1951 25.9962 44.0649 26.8601C43.9321 27.7403 45.008 28.3217 45.6738 27.738C46.0399 27.4171 46.1071 26.8657 45.8418 26.461V26.461Z" fill="#001432" />
      <path d="M31.2945 11.2363C31.2945 10.6971 30.8572 10.2598 30.3179 10.2598H26.1783C25.6391 10.2598 25.2018 10.6971 25.2018 11.2363V15.3759C25.2018 15.9151 25.6391 16.3524 26.1783 16.3524H30.3179C30.8572 16.3524 31.2945 15.9151 31.2945 15.3759V11.2363ZM29.3413 14.3992H27.1549V12.2128H29.3413V14.3992Z" fill="#001432" />
      <path d="M40.4465 11.2363C40.4465 10.6971 40.0092 10.2598 39.4699 10.2598H35.3304C34.7911 10.2598 34.3538 10.6971 34.3538 11.2363V15.3759C34.3538 15.9151 34.7911 16.3524 35.3304 16.3524H39.4699C40.0092 16.3524 40.4465 15.9151 40.4465 15.3759V11.2363ZM38.4934 14.3992H36.3069V12.2128H38.4934V14.3992Z" fill="#001432" />
      <path d="M31.2945 19.7754C31.2945 19.2361 30.8572 18.7988 30.3179 18.7988H26.1783C25.6391 18.7988 25.2018 19.2361 25.2018 19.7754V23.9149C25.2018 24.4542 25.6391 24.8915 26.1783 24.8915H30.3179C30.8572 24.8915 31.2945 24.4542 31.2945 23.9149V19.7754ZM29.3413 22.9384H27.1549V20.752H29.3413V22.9384Z" fill="#001432" />
      <path d="M40.4465 19.7754C40.4465 19.2361 40.0092 18.7988 39.4699 18.7988H35.3304C34.7911 18.7988 34.3538 19.2361 34.3538 19.7754V23.9149C34.3538 24.4542 34.7911 24.8915 35.3304 24.8915H39.4699C40.0092 24.8915 40.4465 24.4542 40.4465 23.9149V19.7754ZM38.4934 22.9384H36.3069V20.752H38.4934V22.9384Z" fill="#001432" />
      <path d="M30.3179 27.3378H26.1783C25.6391 27.3378 25.2018 27.7751 25.2018 28.3143V32.4539C25.2018 32.9931 25.6391 33.4304 26.1783 33.4304H30.3179C30.8572 33.4304 31.2945 32.9931 31.2945 32.4539V28.3143C31.2945 27.7751 30.8572 27.3378 30.3179 27.3378ZM29.3413 31.4773H27.1549V29.2909H29.3413V31.4773Z" fill="#001432" />
      <path d="M39.4699 27.3378H35.3304C34.7911 27.3378 34.3538 27.7751 34.3538 28.3143V32.4539C34.3538 32.9931 34.7911 33.4304 35.3304 33.4304H39.4699C40.0092 33.4304 40.4465 32.9931 40.4465 32.4539V28.3143C40.4465 27.7751 40.0092 27.3378 39.4699 27.3378ZM38.4934 31.4773H36.3069V29.2909H38.4934V31.4773Z" fill="#001432" />
      <path d="M8.65594 25.2399C8.11669 25.2399 7.67938 25.6772 7.67938 26.2164V38.4511C7.67938 38.9904 8.11669 39.4277 8.65594 39.4277C9.1952 39.4277 9.63251 38.9904 9.63251 38.4511V26.2164C9.63251 25.6772 9.1952 25.2399 8.65594 25.2399Z" fill="#001432" />
      <path d="M12.6555 39.4277C13.1947 39.4277 13.632 38.9904 13.632 38.4511V26.2164C13.632 25.6772 13.1947 25.2399 12.6555 25.2399C12.1162 25.2399 11.6789 25.6772 11.6789 26.2164V38.4511C11.6789 38.9905 12.1161 39.4277 12.6555 39.4277Z" fill="#001432" />
      <path d="M16.6551 39.4277C17.1943 39.4277 17.6317 38.9904 17.6317 38.4511V26.2164C17.6317 25.6772 17.1943 25.2399 16.6551 25.2399C16.1158 25.2399 15.6785 25.6772 15.6785 26.2164V38.4511C15.6785 38.9905 16.1157 39.4277 16.6551 39.4277Z" fill="#001432" />
    </g>
    <defs>
      <clipPath id="clip0_643_155">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const MetaverseIcon = (props) => (
  <svg {...props} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9666 49.0235V39.6245L12.2244 35.3083C9.25702 32.6087 7.56561 29.7529 7.56561 25.7414V22.9458H31.2931C31.9655 24.544 33.5463 25.6657 35.389 25.6657H41.6983L43.2461 28.0053C43.6013 28.733 43.1568 29.5986 42.3582 29.7325L39.7625 30.1711C39.2084 30.2643 38.8028 30.7437 38.8028 31.3055V35.5014C38.8028 37.7785 36.9568 39.6245 34.6797 39.6245C33.6234 39.6245 32.7671 40.4808 32.7671 41.5371V49.0235H16.9666Z" fill="#FFDAD5" />
    <path d="M19.949 32.1201V37.9981C19.949 38.8967 19.2213 39.6245 18.3236 39.6245H16.9666L12.2244 35.3083C9.25702 32.6087 7.56561 29.7529 7.56561 25.7414V22.9458H15.9991C15.9904 23.0661 15.9865 24.8045 15.9865 24.8045C15.9865 26.4173 16.7221 26.9723 17.9854 27.9767C19.2479 28.981 19.949 30.5064 19.949 32.1201V32.1201Z" fill="#FFD28D" />
    <path d="M24.6553 15.4749H31.2932C31.9656 13.8767 33.5464 12.755 35.3891 12.755H38.4282C38.6718 12.0098 38.8028 10.2437 38.8028 9.4179V0.976685L37.5811 2.61272C36.2537 4.38948 34.1654 5.43655 31.9472 5.43655H21.8137C18.035 5.43655 14.4107 6.93772 11.7392 9.60911C10.403 10.9453 8.92411 13.4504 8.54091 15.475H16.1177H24.6553V15.4749Z" fill="#FFD28D" />
    <path d="M16.1177 15.4749H8.64666C7.5201 15.4749 6.60692 16.3879 6.60692 17.5146V20.907C6.60692 22.0326 7.52 22.9458 8.64666 22.9458H31.2931C31.07 22.416 30.9468 21.8337 30.9468 21.2234V17.1972C30.9468 16.5869 31.07 16.0046 31.2931 15.4749H24.6553H16.1177Z" fill="#868EAF" />
    <path d="M41.8025 12.7551H39.3435V25.6659H41.8025C42.6682 25.6659 43.3699 24.9641 43.3699 24.0984V14.3226C43.3699 13.4569 42.6681 12.7551 41.8025 12.7551V12.7551Z" fill="white" />
    <path d="M35.389 12.7551C32.9354 12.7551 30.9463 14.7442 30.9463 17.1978V21.2232C30.9463 23.6768 32.9354 25.6659 35.389 25.6659H39.3434V12.7551H35.389Z" fill="#E7E7EF" />
    <path d="M6.58915 23.109V25.7414C6.58915 29.7252 8.1245 32.8986 11.5672 36.0305L15.9901 40.0561V49.0234C15.9901 49.5628 16.4273 50 16.9667 50C17.506 50 17.9432 49.5628 17.9432 49.0234V40.601H18.3237C19.7584 40.601 20.9256 39.4333 20.9256 37.998V32.1201C20.9256 30.1803 20.0756 28.3914 18.5932 27.2122L18.5258 27.1587C17.2872 26.1745 16.9632 25.873 16.9632 24.8067C16.9638 24.5103 16.9649 24.2005 16.9662 23.9224H30.6887C31.4191 25.197 32.6281 26.1087 34.0311 26.47C34.473 26.5848 34.9325 26.6424 35.389 26.6424H41.1736L42.3833 28.4711C42.4245 28.6055 42.3318 28.7468 42.1955 28.7696L39.6005 29.2081C38.5725 29.381 37.8262 30.2631 37.8262 31.3055V35.5014C37.8262 37.2364 36.4147 38.6479 34.6797 38.6479C33.0867 38.6479 31.7905 39.944 31.7905 41.5371V49.0235C31.7905 49.5628 32.2278 50.0001 32.767 50.0001C33.3063 50.0001 33.7436 49.5628 33.7436 49.0235V41.5371C33.7436 41.021 34.1635 40.6011 34.6797 40.6011C37.4916 40.6011 39.7793 38.3134 39.7793 35.5014V31.3055C39.7793 31.2203 39.8404 31.1483 39.9251 31.1341L42.5197 30.6957C43.9162 30.4614 44.8979 28.7311 44.0605 27.4665L43.2263 26.2056C43.9017 25.7477 44.3463 24.974 44.3463 24.0984V14.3226C44.3463 12.9198 43.205 11.7785 41.8023 11.7785H39.6137C39.7283 10.9091 39.7791 9.94105 39.7791 9.41791V0.976715C39.7791 0.556012 39.5097 0.182576 39.1104 0.0499587C38.7106 -0.0826583 38.2717 0.0554274 38.02 0.392438L36.7988 2.02818C35.6611 3.55083 33.8473 4.45991 31.947 4.45991H21.8136C17.7469 4.45991 13.9239 6.04331 11.0487 8.9185C9.78993 10.1774 8.32489 12.4666 7.733 14.6402C6.51523 15.0282 5.63046 16.1698 5.63046 17.5146V20.9069C5.63037 21.7752 5.9998 22.5583 6.58915 23.109V23.109ZM17.3107 28.6879L17.3775 28.7409C18.3911 29.5473 18.9725 30.779 18.9725 32.1202V37.9982C18.9725 38.3565 18.6815 38.648 18.3237 38.648H17.3445L12.8816 34.586C9.84003 31.8189 8.54227 29.1739 8.54227 25.7415V23.9225H8.64667H15.0128C15.0117 24.1581 15.0107 24.4478 15.0099 24.8046C15.0099 26.8599 16.0253 27.6665 17.3107 28.6879V28.6879ZM34.0645 13.9952C34.4823 13.8218 34.9366 13.7317 35.389 13.7317H38.3668V24.6892H35.389C33.5099 24.6892 31.9233 23.1044 31.9233 21.2234V17.1973C31.9233 15.8159 32.7837 14.5237 34.0645 13.9952V13.9952ZM42.3934 14.3226V24.0983C42.3934 24.4961 42.0536 24.6892 41.6985 24.6892H40.32V13.7317H41.8026C42.1282 13.7317 42.3934 13.9967 42.3934 14.3226ZM12.4298 10.2996C14.936 7.7933 18.2686 6.41303 21.8135 6.41303H31.947C34.1789 6.41303 36.3207 5.46469 37.8261 3.84175V9.41791C37.8261 10.0136 37.7538 11.0398 37.6416 11.7785H35.3889C33.4679 11.7785 31.6444 12.83 30.6885 14.4984H24.6552C24.1159 14.4984 23.6787 14.9356 23.6787 15.4749C23.6787 16.0143 24.1159 16.4515 24.6552 16.4515H30.0208C29.987 16.6983 29.9698 16.9488 29.9698 17.1978V21.2232C29.9698 21.472 29.987 21.7228 30.0208 21.9693H15.9992H8.64667C8.06044 21.9693 7.58349 21.4928 7.58349 20.907V17.5147C7.58349 16.9284 8.06044 16.4515 8.64667 16.4515H16.1176C16.657 16.4515 17.0942 16.0143 17.0942 15.4749C17.0942 14.9356 16.657 14.4984 16.1176 14.4984H9.82713C10.407 12.9052 11.4993 11.2301 12.4298 10.2996V10.2996Z" fill="#001432" />
    <path d="M19.4835 15.8487C19.8231 16.6632 21.0256 16.6218 21.3098 15.7884C21.5974 14.9446 20.6459 14.1851 19.8837 14.6377C19.4717 14.8824 19.3028 15.4074 19.4835 15.8487V15.8487Z" fill="#001432" />
  </svg>
);
