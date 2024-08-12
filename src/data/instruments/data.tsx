import InstrumentsItemProps from "@/typescript/interfaces/Instruments/InstrumentsItemProps";
import { AdjustIcon, BatchIcon, BlurBackgroundIcon, BobbleHeadIcon, ColorBackgroundIcon, ExpandIcon, InstantBackgroundsIcon, InstantShadowsIcon, RemoveBackgroundIcon, ResizeIcon, RetouchIcon, RgbIcon, RoundIcon, RoundProfileIcon, StickersToPhotoIcon, SwatchbookIcon, TextIcon, TextToPhotoIcon } from '../../components/svg'


const data: InstrumentsItemProps[] = [
    {
        imageLeft: "/instruments/remove_background.png",
        imageRight: "/instruments/remove_background_after.png",
        headingIcon: (<RemoveBackgroundIcon />),
        headingText: "AI background remover",
        description: "Automatically remove the background of your image",
        href: "/instruments/background-remove"
    },
    {
        imageLeft: "/instruments/ai_backgrounds_before.png",
        imageRight: "/instruments/ai_backgrounds_after.png",
        headingIcon: <InstantBackgroundsIcon />,
        headingText: "AI backgrounds",
        description: "Create realistic backgrounds in less than a second",
        href: "/instruments/background-ai"
    },
    {
        imageLeft: "/instruments/retouch_before.png",
        imageRight: "/instruments/retouch_after.png",
        headingIcon: <RetouchIcon />,
        headingText: "AI retouching",
        description: "Remove unwanted parts of an image by swiping",
        href: "/instruments/retouching-ai"
    },
    {
        imageLeft: "/instruments/ai_expand_before.png",
        imageRight: "/instruments/ai_expand_after.png",
        headingIcon: <ExpandIcon />,
        headingText: "AI extension",
        description: "Change the purpose of the photographic material or restore objects outside the frame layout",
        href: "/instruments/extension-ai"
    },
    {
        imageLeft: "/instruments/instant_shadows_before.png",
        imageRight: "/instruments/instant_shadows_after.png",
        headingIcon: <InstantShadowsIcon />,
        headingText: "AI-shadows",
        description: "Create a realistic shadow for your subject",
        href: "/instruments/shadows-ai"
    },
    {
        imageLeft: "/instruments/blur_background_before.png",
        imageRight: "/instruments/blur_background_after.png",
        headingIcon: <BlurBackgroundIcon />,
        headingText: "Blur background",
        description: "Automatically blur the background of your image",
        href: "/instruments/background-blur"
    },
    {
        imageLeft: "/instruments/white_background_before.png",
        imageRight: "/instruments/white_background_after.png",
        headingIcon: <ColorBackgroundIcon />,
        headingText: "Add a white background",
        description: "Automatically add a white background behind your object",
        href: "/instruments/background-white"
    },
    {
        imageLeft: "/instruments/image_resizer_before.png",
        imageRight: "/instruments/image_resizer_after.png",
        headingIcon: <ResizeIcon />,
        headingText: "Resizing an Image",
        description: "Crop images online for the perfect fit in a simple and fast way",
        href: "/instruments/image-resize"
    },
    {
        imageLeft: "/instruments/black_background_before.png",
        imageRight: "/instruments/black_background_after.png",
        headingIcon: <ColorBackgroundIcon />,
        headingText: "Black background",
        description: "Automatically add a black background behind your object",
        href: "/instruments/background-black"
    },
    {
        imageLeft: "/instruments/add_text_to_photo_before.png",
        imageRight: "/instruments/add_text_to_photo_after.png",
        headingIcon: <TextToPhotoIcon />,
        headingText: "Add text to photo",
        description: "Share stories and enhance images by adding text",
        href: "/instruments/text-add"
    },
    {
        imageLeft: "/instruments/change_background_color_before.png",
        imageRight: "/instruments/change_background_color_after.png",
        headingIcon: <ColorBackgroundIcon />,
        headingText: "Change background color",
        description: "Remove the background of your photo and add any color",
        href: "/instruments/background-change"
    },
    {
        imageLeft: "/instruments/transparent_background_before.png",
        imageRight: "/instruments/transparent_background_after.png",
        headingIcon: <ColorBackgroundIcon />,
        headingText: "Transparent background constructor",
        description: "Remove the background of your photo and change the background to transparent.",
        href: "/instruments/background-transparent"
    },
    {
        imageLeft: "/instruments/add_background_before.png",
        imageRight: "/instruments/add_background_after.png",
        headingIcon: <ColorBackgroundIcon />,
        headingText: "Photo background changer",
        description: "Easily transform your photos using our free tool to change the background of your photo",
        href: "/instruments/background-photo"
    },
    {
        imageLeft: "/instruments/bulk_resizer_before.png",
        imageRight: "/instruments/bulk_resizer_after.png",
        headingIcon: <BatchIcon />,
        headingText: "Perform bulk resizing images",
        description: "Resize all images to all digital formats with one click and share them with your team",
        href: "/instruments/resize-bulk"
    },
    {
        imageLeft: "/instruments/profile_picture_maker_before.png",
        imageRight: "/instruments/profile_picture_maker_after.png",
        headingIcon: <RoundProfileIcon />,
        headingText: "Profile Photo Wizard",
        description: "Discover creative templates tailored for all social media and shopping platforms platforms",
        href: "/instruments/profile-photo"
    },
    {
        imageLeft: "/instruments/add_stickers_before.png",
        imageRight: "/instruments/add_stickers_after.png",
        headingIcon: <StickersToPhotoIcon />,
        headingText: "Add stickers to photos",
        description: "Choose from a wide range of stickers or upload your own stickers to add to image",
        href: "/instruments/stickers-add"
    },
    {
        imageLeft: "/instruments/curved_text_generator_before.png",
        imageRight: "/instruments/curved_text_generator_after.png",
        headingIcon: <TextIcon />,
        headingText: "Curved text",
        description: "Add curved text to your designs and images in just a few steps.",
        href: "/instruments/text-curved"
    },
    {
        imageLeft: "/instruments/color_splasher_before.png",
        imageRight: "/instruments/color_splasher_after.png",
        headingIcon: undefined,
        headingText: "Color splash",
        description: "Transform any background into breathtaking black white background while maintaining the bright colors of the objects shooting",
        href: "/instruments/color-splash"
    },
    {
        imageLeft: "/instruments/motion_blur_effect_before.png",
        imageRight: "/instruments/motion_blur_effect_after.png",
        headingIcon: <BlurBackgroundIcon />,
        headingText: "Motion blur effect",
        description: "Create stunning images by adding to the background motion blur effect.",
        href: "/instruments/motion-blur"
    },
    {
        imageLeft: "/instruments/resize_for_instagram_before.png",
        imageRight: "/instruments/resize_for_instagram_after.png",
        headingIcon: <ResizeIcon />,
        headingText: "Resize photos for Instagram",
        description: "For optimal results on Instagram resize the photo according to the suggested platform dimensions.",
        href: "/instruments/resize-instagram"
    },
    {
        imageLeft: "/instruments/change_color_of_image_before.png",
        imageRight: "/instruments/change_color_of_image_after.png",
        headingIcon: <SwatchbookIcon />,
        headingText: "Change the color of the image",
        description: "Easily adjust colors, contrast, shadows, tint, saturation and brightness with one click.",
        href: "/instruments/image-recolor"
    },
    {
        imageLeft: "/instruments/image_brightener_before.png",
        imageRight: "/instruments/image_brightener_after.png",
        headingIcon: <AdjustIcon />,
        headingText: "Image brightening agent",
        description: "Lighten the person or object in the foreground, to emphasize his presence and create a focal point in the composition",
        href: "/instruments/image-brightening"
    },
    {
        imageLeft: "/instruments/photo_enhancer_before.png",
        imageRight: "/instruments/photo_enhancer_after.png",
        headingIcon: <AdjustIcon />,
        headingText: "AI image enhancement tool",
        description: "Improve image quality, correct colors, enhance details and bring visuals to life, like never before",
        href: "/instruments/image-enhancement"
    },
    {
        imageLeft: "/instruments/round_profil_picture_before.png",
        imageRight: "/instruments/round_profil_picture_after.png",
        headingIcon: <RoundProfileIcon />,
        headingText: "Round profile photo",
        description: "Create a modern round profile photo of everything a few clicks",
        href: "/instruments/photo-round"
    },
    {
        imageLeft: "/instruments/outline_image_before.png",
        imageRight: "/instruments/outline_image_after.png",
        headingIcon: <BobbleHeadIcon />,
        headingText: "Outline image",
        description: "Add a cool outline to your image and create printable stickers and stunning collages",
        href: "/instruments/image-outline"
    },
    {
        imageLeft: "/instruments/black_and_white_before.png",
        imageRight: "/instruments/black_and_white_after.png",
        headingIcon: <RoundIcon />,
        headingText: "Black and white filter",
        description: "Convert images to monochrome and download them for free",
        href: "/instruments/filter-black-and-white"
    },
    {
        imageLeft: "/instruments/sepia_filter_before.png",
        imageRight: "/instruments/sepia_filter_after.png",
        headingIcon: <RgbIcon />,
        headingText: "Sepia filter",
        description: "Ideal for adding nostalgic, timeless mood to modern photographs",
        href: "/instruments/filter-sepia"
    },
]

export default data;