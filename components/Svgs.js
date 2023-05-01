import {
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { useNavigation } from '@react-navigation/native';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
const logo = `
  <svg width="80" height="46" viewBox="0 0 80 46" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_8_32)">
  <path d="M75 36.3291C75 38.3845 73.3338 40.0507 71.2785 40.0507H8.72152C6.66618 40.0507 5 38.3845 5 36.3291V20.3798H75V36.3291Z" fill="#76A5FF"/>
  </g>
  <path d="M5 3.72152C5 1.66618 6.66618 0 8.72152 0H71.2785C73.3338 0 75 1.66618 75 3.72152V19.6709H5V3.72152Z" fill="#76FFAD"/>
  <path d="M15.7903 26.2823C14.9641 26.2823 14.2236 26.1482 13.569 25.8799C12.9144 25.6116 12.3886 25.2146 11.9916 24.6887C11.6052 24.1629 11.4013 23.5298 11.3799 22.7894H14.3095C14.3524 23.2079 14.4973 23.5298 14.7441 23.7551C14.9909 23.9698 15.3128 24.0771 15.7099 24.0771C16.1176 24.0771 16.4396 23.9859 16.6757 23.8034C16.9117 23.6103 17.0298 23.3474 17.0298 23.0147C17.0298 22.7357 16.9332 22.505 16.74 22.3226C16.5576 22.1401 16.3269 21.9899 16.0479 21.8718C15.7796 21.7538 15.3933 21.6197 14.8889 21.4694C14.1592 21.2441 13.5637 21.0187 13.1022 20.7934C12.6408 20.568 12.2437 20.2354 11.9111 19.7954C11.5784 19.3554 11.4121 18.7813 11.4121 18.0731C11.4121 17.0214 11.793 16.2005 12.5549 15.6103C13.3168 15.0093 14.3095 14.7089 15.5328 14.7089C16.7776 14.7089 17.781 15.0093 18.5429 15.6103C19.3048 16.2005 19.7126 17.0268 19.7662 18.0891H16.7883C16.7669 17.7243 16.6327 17.4399 16.3859 17.236C16.1391 17.0214 15.8225 16.9141 15.4362 16.9141C15.1036 16.9141 14.8353 17.0053 14.6314 17.1877C14.4275 17.3594 14.3256 17.6116 14.3256 17.9443C14.3256 18.3091 14.4973 18.5935 14.8406 18.7974C15.184 19.0013 15.7206 19.2213 16.4503 19.4574C17.18 19.7042 17.7702 19.9403 18.2209 20.1656C18.6824 20.391 19.0794 20.7183 19.4121 21.1475C19.7447 21.5767 19.9111 22.1294 19.9111 22.8054C19.9111 23.4493 19.7447 24.0342 19.4121 24.56C19.0901 25.0858 18.618 25.5043 17.9956 25.8155C17.3732 26.1267 16.6381 26.2823 15.7903 26.2823Z" fill="white"/>
  <path d="M33.7579 18.5077C33.7579 19.1623 33.6077 19.7632 33.3072 20.3105C33.0067 20.847 32.5453 21.2816 31.9229 21.6143C31.3005 21.947 30.5279 22.1133 29.605 22.1133H27.8988V26.1696H25.1462V14.8698H29.605C30.5064 14.8698 31.2683 15.0254 31.8907 15.3366C32.5131 15.6478 32.9799 16.0771 33.2911 16.6244C33.6023 17.1716 33.7579 17.7994 33.7579 18.5077ZM29.3957 19.9242C29.9216 19.9242 30.3132 19.8008 30.5708 19.5539C30.8283 19.3071 30.9571 18.9584 30.9571 18.5077C30.9571 18.057 30.8283 17.7082 30.5708 17.4614C30.3132 17.2146 29.9216 17.0912 29.3957 17.0912H27.8988V19.9242H29.3957Z" fill="white"/>
  <path d="M41.4847 24.0449H45.0903V26.1696H38.7321V14.8698H41.4847V24.0449Z" fill="white"/>
  <path d="M52.6969 14.8698V26.1696H49.9444V14.8698H52.6969Z" fill="white"/>
  <path d="M66.3617 14.8698V17.0751H63.3677V26.1696H60.6152V17.0751H57.6212V14.8698H66.3617Z" fill="white"/>
  <defs>
  <filter id="filter0_d_8_32" x="0.746836" y="16.8355" width="78.5063" height="28.1772" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="0.708861"/>
  <feGaussianBlur stdDeviation="2.12658"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_32"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_32" result="shape"/>
  </filter>
  </defs>
  </svg>`;

const bottomLayer = `<svg width="390" height="118" viewBox="0 0 390 118" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_11_336)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 19H142.119C143.941 41.9014 166.473 60 194 60C221.527 60 244.059 41.9014 245.881 19H390V118H0V19Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_11_336" x="-13" y="0" width="416" height="125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-6"/>
<feGaussianBlur stdDeviation="6.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_336"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_336" result="shape"/>
</filter>
</defs>
</svg>
`

const leftArrow = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22.5L7.5 15L15 7.5" stroke="#33363F" stroke-width="2"/>
<path d="M22.5 22.5L15 15L22.5 7.5" stroke="#33363F" stroke-width="2"/>
</svg>`;

const googleLogo = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_167_953)">
<path d="M23.5078 12.2245C23.5078 11.2413 23.4295 10.5237 23.2598 9.77963H12.2295V14.2176H18.7041C18.5736 15.3205 17.8687 16.9815 16.3022 18.0976L16.2802 18.2461L19.7678 20.9963L20.0095 21.0209C22.2285 18.9347 23.5078 15.8653 23.5078 12.2245" fill="#4285F4"/>
<path d="M12.2296 23.9176C15.4016 23.9176 18.0645 22.8545 20.0095 21.0209L16.3023 18.0976C15.3102 18.8018 13.9787 19.2934 12.2296 19.2934C9.1228 19.2934 6.48598 17.2074 5.54603 14.324L5.40825 14.3359L1.7818 17.1927L1.73438 17.3269C3.6663 21.2334 7.63462 23.9176 12.2296 23.9176Z" fill="#34A853"/>
<path d="M5.54621 14.324C5.2982 13.5799 5.15466 12.7825 5.15466 11.9588C5.15466 11.1349 5.2982 10.3377 5.53316 9.59357L5.52659 9.4351L1.8547 6.53238L1.73457 6.59055C0.938328 8.21165 0.481445 10.0321 0.481445 11.9588C0.481445 13.8854 0.938328 15.7058 1.73457 17.3269L5.54621 14.324" fill="#FBBC05"/>
<path d="M12.2295 4.62405C14.4356 4.62405 15.9237 5.59403 16.7722 6.40463L20.0878 3.1093C18.0515 1.18261 15.4015 1.52588e-05 12.2295 1.52588e-05C7.63462 1.52588e-05 3.6663 2.68408 1.73438 6.59058L5.53297 9.5936C6.48597 6.71021 9.12279 4.62405 12.2295 4.62405" fill="#EB4335"/>
</g>
<defs>
<clipPath id="clip0_167_953">
<rect width="23.04" height="24" fill="white" transform="translate(0.480469)"/>
</clipPath>
</defs>
</svg>
`

const appleLogo = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_167_1344)">
<path d="M17.2729 0.0119953C17.2219 -0.0450047 15.3844 0.0344953 13.7854 1.77C12.1864 3.504 12.4324 5.493 12.4684 5.544C12.5044 5.595 14.7484 5.6745 16.1809 3.657C17.6134 1.6395 17.3239 0.0704953 17.2729 0.0119953V0.0119953ZM22.2439 17.6115C22.1719 17.4675 18.7564 15.7605 19.0744 12.4785C19.3924 9.195 21.5869 8.295 21.6214 8.1975C21.6559 8.1 20.7259 7.0125 19.7404 6.462C19.0168 6.07387 18.216 5.85151 17.3959 5.811C17.2339 5.8065 16.6714 5.6685 15.5149 5.985C14.7529 6.1935 13.0354 6.8685 12.5629 6.8955C12.0889 6.9225 10.6789 6.1125 9.16239 5.89799C8.19189 5.71049 7.16289 6.0945 6.42639 6.39C5.69139 6.684 4.29339 7.521 3.31539 9.7455C2.33739 11.9685 2.84889 15.4905 3.21489 16.5855C3.58089 17.679 4.15239 19.4715 5.12439 20.7795C5.98839 22.2555 7.13439 23.28 7.61289 23.628C8.09139 23.976 9.44139 24.207 10.3774 23.7285C11.1304 23.2665 12.4894 23.001 13.0264 23.0205C13.5619 23.04 14.6179 23.2515 15.6994 23.829C16.5559 24.1245 17.3659 24.0015 18.1774 23.6715C18.9889 23.34 20.1634 22.083 21.5344 19.5345C22.0549 18.3495 22.2919 17.709 22.2439 17.6115V17.6115Z" fill="black"/>
<path d="M17.2729 0.0119953C17.2219 -0.0450047 15.3844 0.0344953 13.7854 1.77C12.1864 3.504 12.4324 5.493 12.4684 5.544C12.5044 5.595 14.7484 5.6745 16.1809 3.657C17.6134 1.6395 17.3239 0.0704953 17.2729 0.0119953V0.0119953ZM22.2439 17.6115C22.1719 17.4675 18.7564 15.7605 19.0744 12.4785C19.3924 9.195 21.5869 8.295 21.6214 8.1975C21.6559 8.1 20.7259 7.0125 19.7404 6.462C19.0168 6.07387 18.216 5.85151 17.3959 5.811C17.2339 5.8065 16.6714 5.6685 15.5149 5.985C14.7529 6.1935 13.0354 6.8685 12.5629 6.8955C12.0889 6.9225 10.6789 6.1125 9.16239 5.89799C8.19189 5.71049 7.16289 6.0945 6.42639 6.39C5.69139 6.684 4.29339 7.521 3.31539 9.7455C2.33739 11.9685 2.84889 15.4905 3.21489 16.5855C3.58089 17.679 4.15239 19.4715 5.12439 20.7795C5.98839 22.2555 7.13439 23.28 7.61289 23.628C8.09139 23.976 9.44139 24.207 10.3774 23.7285C11.1304 23.2665 12.4894 23.001 13.0264 23.0205C13.5619 23.04 14.6179 23.2515 15.6994 23.829C16.5559 24.1245 17.3659 24.0015 18.1774 23.6715C18.9889 23.34 20.1634 22.083 21.5344 19.5345C22.0549 18.3495 22.2919 17.709 22.2439 17.6115V17.6115Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_167_1344">
<rect width="24" height="24" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>
`
const profile = `<svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4998 4.84981C19.9907 4.84981 18.7059 5.3624 17.6455 6.38756C16.585 7.41272 16.0548 8.65475 16.0548 10.1136C16.0548 11.5725 16.585 12.8145 17.6455 13.8397C18.7059 14.8649 19.9907 15.3775 21.4998 15.3775C23.0088 15.3775 24.2936 14.8649 25.354 13.8397C26.4145 12.8145 26.9447 11.5725 26.9447 10.1136C26.9447 8.65475 26.4145 7.41272 25.354 6.38756C24.2936 5.3624 23.0088 4.84981 21.4998 4.84981ZM21.5609 27.5611C17.9718 27.5611 14.4234 28.2117 10.9158 29.5129C7.40818 30.8141 5.65438 31.9378 5.65438 32.8841V35.6047H37.4675V32.8841C37.4675 31.9378 35.7137 30.8141 32.2061 29.5129C28.6985 28.2117 25.1501 27.5611 21.5609 27.5611ZM21.4998 0C24.3956 0 26.8631 0.985735 28.9024 2.9572C30.9417 4.92867 31.9614 7.31415 31.9614 10.1136C31.9614 12.9131 30.9417 15.2986 28.9024 17.2701C26.8631 19.2415 24.3956 20.2273 21.4998 20.2273C18.604 20.2273 16.1364 19.2415 14.0971 17.2701C12.0578 15.2986 11.0381 12.9131 11.0381 10.1136C11.0381 7.31415 12.0578 4.92867 14.0971 2.9572C16.1364 0.985735 18.604 0 21.4998 0ZM21.4998 22.7113C24.0693 22.7113 26.9039 23.0662 30.0037 23.7759C33.1034 24.4856 35.938 25.6488 38.5075 27.2654C41.0771 28.882 42.3618 30.7549 42.3618 32.8841V40.4545H0.637695V32.8841C0.637695 30.7549 1.92246 28.882 4.49198 27.2654C7.0615 25.6488 9.89613 24.4856 12.9959 23.7759C16.0956 23.0662 18.9302 22.7113 21.4998 22.7113Z" fill="#76A5FF"/>
</svg>
`

const user = `<svg width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4998 4.84981C19.9907 4.84981 18.7059 5.3624 17.6455 6.38756C16.585 7.41272 16.0548 8.65475 16.0548 10.1136C16.0548 11.5725 16.585 12.8145 17.6455 13.8397C18.7059 14.8649 19.9907 15.3775 21.4998 15.3775C23.0088 15.3775 24.2936 14.8649 25.354 13.8397C26.4145 12.8145 26.9447 11.5725 26.9447 10.1136C26.9447 8.65475 26.4145 7.41272 25.354 6.38756C24.2936 5.3624 23.0088 4.84981 21.4998 4.84981ZM21.5609 27.5611C17.9718 27.5611 14.4234 28.2117 10.9158 29.5129C7.40818 30.8141 5.65438 31.9378 5.65438 32.8841V35.6047H37.4675V32.8841C37.4675 31.9378 35.7137 30.8141 32.2061 29.5129C28.6985 28.2117 25.1501 27.5611 21.5609 27.5611ZM21.4998 0C24.3956 0 26.8631 0.985735 28.9024 2.9572C30.9417 4.92867 31.9614 7.31415 31.9614 10.1136C31.9614 12.9131 30.9417 15.2986 28.9024 17.2701C26.8631 19.2415 24.3956 20.2273 21.4998 20.2273C18.604 20.2273 16.1364 19.2415 14.0971 17.2701C12.0578 15.2986 11.0381 12.9131 11.0381 10.1136C11.0381 7.31415 12.0578 4.92867 14.0971 2.9572C16.1364 0.985735 18.604 0 21.4998 0ZM21.4998 22.7113C24.0693 22.7113 26.9039 23.0662 30.0037 23.7759C33.1034 24.4856 35.938 25.6488 38.5075 27.2654C41.0771 28.882 42.3618 30.7549 42.3618 32.8841V40.4545H0.637695V32.8841C0.637695 30.7549 1.92246 28.882 4.49198 27.2654C7.0615 25.6488 9.89613 24.4856 12.9959 23.7759C16.0956 23.0662 18.9302 22.7113 21.4998 22.7113Z" fill="#76A5FF"/>
</svg>
`;

const orderLight = `<svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="11.458" y="9.16666" width="32.0833" height="38.9583" rx="2" stroke="#4461F2"/>
<path d="M20.625 20.625H34.375" stroke="#4461F2" stroke-linecap="round"/>
<path d="M20.625 29.7917H34.375" stroke="#4461F2" stroke-linecap="round"/>
<path d="M20.625 38.9583H29.7917" stroke="#4461F2" stroke-linecap="round"/>
</svg>`

const home = `<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.22222 22.8068H15.5556C16.7778 22.8068 17.7778 21.8097 17.7778 20.5909V2.86363C17.7778 1.64488 16.7778 0.64772 15.5556 0.64772H2.22222C1 0.64772 0 1.64488 0 2.86363V20.5909C0 21.8097 1 22.8068 2.22222 22.8068ZM2.22222 40.5341H15.5556C16.7778 40.5341 17.7778 39.5369 17.7778 38.3182V29.4545C17.7778 28.2358 16.7778 27.2386 15.5556 27.2386H2.22222C1 27.2386 0 28.2358 0 29.4545V38.3182C0 39.5369 1 40.5341 2.22222 40.5341ZM24.4444 40.5341H37.7778C39 40.5341 40 39.5369 40 38.3182V20.5909C40 19.3722 39 18.375 37.7778 18.375H24.4444C23.2222 18.375 22.2222 19.3722 22.2222 20.5909V38.3182C22.2222 39.5369 23.2222 40.5341 24.4444 40.5341ZM22.2222 2.86363V11.7273C22.2222 12.946 23.2222 13.9432 24.4444 13.9432H37.7778C39 13.9432 40 12.946 40 11.7273V2.86363C40 1.64488 39 0.64772 37.7778 0.64772H24.4444C23.2222 0.64772 22.2222 1.64488 22.2222 2.86363Z" fill="#76A5FF"/>
</svg>`;



export function Logo() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.Logo}>
                <SvgXml xml={logo} width='280%' height='280%' />
            </View>
        </TouchableOpacity>
    )
}

export function BottomLayer() {
    return (
        <View style={styles.BottomLayer}>
            <SvgXml xml={bottomLayer} width='400' height='200' />
        </View>
    )
}

export function LeftArroww() {
    const navigation = useNavigation();
    return (
        <View style={styles.Arrow}>
            <TouchableOpacity onPress={() => {
                if (navigation.canGoBack()) {
                    navigation.goBack()
                }
            }}>
                <SvgXml xml={leftArrow} width='30' height='30' />
            </TouchableOpacity>
        </View>
    )
}

export function G() {
    return (
        <SvgXml xml={googleLogo} width="30" height="30" />
    )
}

export function A() {
    return (
        <SvgXml xml={appleLogo} width='30' height='30' />
    )
}

export function ContinueButton() {
    return (
        <View style={styles.bottomButton}>
            <FontAwesome5Icon name="arrow-right" size={35} color={"#4461F2"} />
        </View>
    )
}

export function AddButton() {
    return (
        <View style={styles.bottomButton}>
            <FontAwesome5Icon name="plus" size={35} color={"#4461F2"} />
        </View>
    )
}

export function ProfileImage() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <SvgXml xml={profile} width='40' height='40' />
            <Text style={styles.iconText}>Account</Text>

        </TouchableOpacity>

    )
}

export function User() {
    return (
        <SvgXml xml={user} width='30' height='30' />
    )
}

export function OrderLight() {
    return (
        <SvgXml xml={orderLight} width='30' height='30' />
    )
}

export function HomeIcon() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <SvgXml xml={home} width='40' height='40' />
            <Text style={styles.iconText}>Home</Text>
        </TouchableOpacity>
    )
}

export function CameraIcon() {
    return (
        <View style={styles.bottomButton}>
            <FontAwesome5Icon name="camera" size={35} color={"#4461F2"} />
        </View>

    )
}
export function BottomIcons() {
    return (
        <View
            style={{
                top: 670,
                height: 1,
                width: "100%",
                position: "absolute",
                bottom: -1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <TouchableOpacity
                style={{
                    height: "80%",
                    width: "25%",
                    left: 5,
                    top: 4,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <HomeIcon />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    height: "80%",
                    width: "25%",
                    left: -5,
                    top: 4,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ProfileImage />
            </TouchableOpacity>
        </View>
    )
}
export function BottomBar() {
    const navigation = useNavigation();
    return (
        <View style={styles.icons}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <SvgXml xml={home} width='50' height='50' />
                    <Text style={styles.iconText}>Home</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <SvgXml xml={profile} width='50' height='50' />
                    <Text style={styles.iconText}>Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export function CheckmarkIcon() {
    return (
        <View style={styles.bottomButton}>
            <FontAwesome5Icon name="check" size={35} color={"#4461F2"} />
        </View>

    )
}


const styles = StyleSheet.create({
    Logo: {
        height: 15,
        bottom: -40,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        flexDirection: "row",
    },
    Arrow: {
        height: 15,
        left: 30,
        alignSelf: "left",
        position: 'absolute',
    },
    BottomLayer: {
        top: 650,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        flexDirection: "row",
        position: 'absolute',
    },
    Button: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        top: 630,
        position: 'absolute',
    },

    icons: {
        top: 720,
        flex: 1,
        left: 55,
        flexDirection: 'row',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        gap: 150,
        position: 'absolute',
    },
    iconText: {
        fontSize: 20,
        color: '#76A5FF',
        textAlign: 'center',
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 'bold',
    },
    bottomButton: {
        height: 80,
        width: 80,
        borderRadius: 80,
        top: 590,
        position: 'absolute',
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#4461F2",
        alignSelf: "center",
        shadowColor: "#4461F2",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.9,
        backgroundColor: '#ffffff',
        shadowRadius: 4,
    }
    ,
});

const cameraIcon = `<svg width="148" height="149" viewBox="0 0 148 149" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path opacity="0.2" d="M120 55.1398C120 29.6575 99.3425 9 73.8602 9C48.5323 9 28 29.5323 28 54.8602V64.8815C28 84.8292 44.1708 101 64.1185 101H84.0148C103.889 101 120 84.8889 120 65.0148V55.1398Z" fill="url(#pattern0)"/>
<g filter="url(#filter0_d_14_200)">
<circle cx="31.9579" cy="31.9579" r="31.9579" transform="matrix(-1 0 0 1 105.958 22.3158)" fill="url(#paint0_linear_14_200)"/>
</g>
<circle cx="30.6263" cy="30.6263" r="30.6263" transform="matrix(-1 0 0 1 104.626 23.6474)" fill="url(#paint1_linear_14_200)"/>
<circle cx="28.3263" cy="28.3263" r="28.3263" transform="matrix(-1 0 0 1 102.326 25.9474)" fill="black"/>
<circle cx="27.7211" cy="27.7211" r="26.7211" transform="matrix(-1 0 0 1 101.721 26.5526)" fill="#CFD9E3" stroke="url(#paint2_linear_14_200)" stroke-width="2"/>
<g filter="url(#filter1_i_14_200)">
<circle cx="26.0263" cy="26.0263" r="26.0263" transform="matrix(-1 0 0 1 100.026 28.2474)" fill="url(#paint3_linear_14_200)"/>
</g>
<circle cx="26.0263" cy="26.0263" r="25.0263" transform="matrix(-1 0 0 1 100.026 28.2474)" stroke="url(#paint4_linear_14_200)" stroke-width="2"/>
<circle cx="22.2737" cy="22.2737" r="22.2737" transform="matrix(-1 0 0 1 96.2739 32)" fill="black"/>
<circle cx="22.2737" cy="22.2737" r="21.2737" transform="matrix(-1 0 0 1 96.2739 32)" stroke="white" stroke-opacity="0.1" stroke-width="2"/>
<circle cx="21.9105" cy="21.9105" r="21.9105" transform="matrix(-1 0 0 1 95.9106 32.3632)" fill="url(#paint5_linear_14_200)"/>
<circle cx="21.6684" cy="21.6684" r="21.6684" transform="matrix(-1 0 0 1 95.6685 32.6053)" fill="#0B0617"/>
<circle cx="20.0947" cy="20.0947" r="20.0947" transform="matrix(-1 0 0 1 94.0947 34.1789)" fill="url(#paint6_linear_14_200)"/>
<g filter="url(#filter2_ii_14_200)">
<circle cx="18.2789" cy="18.2789" r="18.2789" transform="matrix(-1 0 0 1 92.2788 35.9947)" fill="url(#paint7_linear_14_200)"/>
</g>
<g filter="url(#filter3_dd_14_200)">
<circle cx="13.9211" cy="13.9211" r="13.9211" transform="matrix(-1 0 0 1 87.9209 40.3526)" fill="url(#paint8_linear_14_200)" shape-rendering="crispEdges"/>
</g>
<circle cx="10.6526" cy="10.6526" r="9.65263" transform="matrix(-1 0 0 1 84.6528 43.6211)" fill="url(#paint9_linear_14_200)" stroke="url(#paint10_linear_14_200)" stroke-width="2"/>
<circle cx="7.62632" cy="7.62632" r="6.62632" transform="matrix(-1 0 0 1 81.6265 46.6474)" fill="#181039" stroke="url(#paint11_linear_14_200)" stroke-width="2"/>
<circle cx="5.20526" cy="5.20526" r="4.20526" transform="matrix(-1 0 0 1 79.2051 49.0684)" fill="#2F2A44" stroke="url(#paint12_linear_14_200)" stroke-width="2"/>
<circle cx="2.17895" cy="2.17895" r="2.17895" transform="matrix(-1 0 0 1 76.1787 52.0947)" fill="black"/>
<g filter="url(#filter4_f_14_200)">
<circle cx="0.484211" cy="0.484211" r="0.484211" transform="matrix(-1 0 0 1 73.6367 52.9421)" fill="white"/>
</g>
<g filter="url(#filter5_f_14_200)">
<ellipse cx="11.3184" cy="0.907895" rx="11.3184" ry="0.907895" transform="matrix(-1 0 0 1 95.6685 53.5474)" fill="url(#paint13_linear_14_200)"/>
</g>
<g filter="url(#filter6_f_14_200)">
<ellipse cx="11.3184" cy="0.484211" rx="11.3184" ry="0.484211" transform="matrix(0.5 -0.866025 -0.866025 -0.5 64.1343 71.9409)" fill="#6A35FF"/>
</g>
<ellipse cx="13.4772" cy="10.109" rx="13.4772" ry="10.109" transform="matrix(-0.814318 0.580419 0.580419 0.814318 73.2231 30.1943)" fill="white" fill-opacity="0.2"/>
<ellipse cx="9.45099" cy="6.31615" rx="9.45099" ry="6.31615" transform="matrix(-0.814318 0.580419 0.580419 0.814318 71.6973 34.9905)" fill="url(#paint14_linear_14_200)"/>
<ellipse cx="7.36583" cy="5.48702" rx="7.36583" ry="5.48702" transform="matrix(-0.759873 0.650072 0.650072 0.759873 85.1411 54.2552)" fill="url(#paint15_linear_14_200)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="11.7391" height="16.6087">
<use xlink:href="#image0_14_200" transform="scale(0.0108696)"/>
</pattern>
<filter id="filter0_d_14_200" x="22.042" y="7.31579" width="103.916" height="103.916" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5"/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_200"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_200" result="shape"/>
</filter>
<filter id="filter1_i_14_200" x="47.9736" y="28.2474" width="52.0527" height="52.0526" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.290196 0 0 0 0 0.313726 0 0 0 0 0.360784 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_14_200"/>
</filter>
<filter id="filter2_ii_14_200" x="55.7207" y="-4.00526" width="36.5581" height="116.558" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-40"/>
<feGaussianBlur stdDeviation="50"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_14_200"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="40"/>
<feGaussianBlur stdDeviation="50"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="effect1_innerShadow_14_200" result="effect2_innerShadow_14_200"/>
</filter>
<filter id="filter3_dd_14_200" x="0.0786133" y="0.352631" width="147.842" height="147.842" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="20"/>
<feGaussianBlur stdDeviation="30"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_200"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="20"/>
<feGaussianBlur stdDeviation="30"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_14_200" result="effect2_dropShadow_14_200"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_14_200" result="shape"/>
</filter>
<filter id="filter4_f_14_200" x="67.6685" y="47.9421" width="10.9683" height="10.9684" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_14_200"/>
</filter>
<filter id="filter5_f_14_200" x="48.0317" y="28.5474" width="72.6367" height="51.8158" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="12.5" result="effect1_foregroundBlur_14_200"/>
</filter>
<filter id="filter6_f_14_200" x="33.6992" y="22.0917" width="71.3501" height="79.6102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_14_200"/>
</filter>
<linearGradient id="paint0_linear_14_200" x1="31.9579" y1="0" x2="31.9579" y2="63.9158" gradientUnits="userSpaceOnUse">
<stop stop-color="#FEFEFF"/>
<stop offset="1" stop-color="#434955"/>
</linearGradient>
<linearGradient id="paint1_linear_14_200" x1="30.6263" y1="0" x2="30.6263" y2="61.2526" gradientUnits="userSpaceOnUse">
<stop stop-color="#CFD8E1"/>
<stop offset="1" stop-color="#A7AEBD"/>
</linearGradient>
<linearGradient id="paint2_linear_14_200" x1="27.7211" y1="0" x2="27.7211" y2="55.4421" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_14_200" x1="8.86404" y1="6.22368" x2="43.5029" y2="45.4518" gradientUnits="userSpaceOnUse">
<stop stop-color="#F4FAFF"/>
<stop offset="1" stop-color="#A9B0BF"/>
</linearGradient>
<linearGradient id="paint4_linear_14_200" x1="20.4056" y1="0.79423" x2="26.0263" y2="52.0526" gradientUnits="userSpaceOnUse">
<stop stop-color="#C1CEDA"/>
<stop offset="1" stop-color="white" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint5_linear_14_200" x1="21.9105" y1="0" x2="21.9105" y2="43.8211" gradientUnits="userSpaceOnUse">
<stop stop-color="#6B46B9"/>
<stop offset="0.494792" stop-color="#9B7CF2"/>
<stop offset="1" stop-color="#466DB9"/>
</linearGradient>
<linearGradient id="paint6_linear_14_200" x1="5.5079" y1="8.23158" x2="41.986" y2="30.0756" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="0.432292" stop-color="#5558DE"/>
<stop offset="1" stop-color="#AD47BE"/>
</linearGradient>
<linearGradient id="paint7_linear_14_200" x1="3.6921" y1="7.1421" x2="38.1921" y2="27.3579" gradientUnits="userSpaceOnUse">
<stop stop-color="#4A5AED"/>
<stop offset="0.484375" stop-color="#655FE0"/>
<stop offset="1" stop-color="#AD47BE"/>
</linearGradient>
<linearGradient id="paint8_linear_14_200" x1="3.20789" y1="5.26579" x2="21.3658" y2="25.4816" gradientUnits="userSpaceOnUse">
<stop stop-color="#7D54D3"/>
<stop offset="0.23727" stop-color="#CBB9FF" stop-opacity="0.71"/>
<stop offset="1" stop-color="#141461"/>
</linearGradient>
<linearGradient id="paint9_linear_14_200" x1="0.544737" y1="7.92895" x2="20.8816" y2="13.7395" gradientUnits="userSpaceOnUse">
<stop stop-color="#2F007C"/>
<stop offset="0.552083" stop-color="#5383FF"/>
<stop offset="1" stop-color="#C3A6FF"/>
</linearGradient>
<linearGradient id="paint10_linear_14_200" x1="5.57995" y1="1.58521" x2="15.7253" y2="19.7835" gradientUnits="userSpaceOnUse">
<stop stop-color="#8D5EBA"/>
<stop offset="1" stop-color="#7677D6"/>
</linearGradient>
<linearGradient id="paint11_linear_14_200" x1="3.99474" y1="1.13487" x2="11.2579" y2="14.1632" gradientUnits="userSpaceOnUse">
<stop stop-color="#8D5EBA"/>
<stop offset="1" stop-color="#7677D6"/>
</linearGradient>
<linearGradient id="paint12_linear_14_200" x1="2.72657" y1="0.774593" x2="7.68396" y2="9.66692" gradientUnits="userSpaceOnUse">
<stop stop-color="#251A55"/>
<stop offset="0.46875" stop-color="#283C84"/>
<stop offset="0.979167" stop-color="#230E50"/>
</linearGradient>
<linearGradient id="paint13_linear_14_200" x1="21.3053" y1="0.72631" x2="0.423685" y2="0.968414" gradientUnits="userSpaceOnUse">
<stop stop-color="#3562FF"/>
<stop offset="1" stop-color="#CB35FF"/>
</linearGradient>
<linearGradient id="paint14_linear_14_200" x1="9.45099" y1="0" x2="9.45099" y2="12.6323" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.2"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint15_linear_14_200" x1="7.36583" y1="0" x2="7.36583" y2="10.974" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.3"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`