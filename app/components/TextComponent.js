import {getLangs} from "@/app/[lang]/langs";

const TextComponent = async ({lang}) => {

    const dict = await getLangs(lang)

    return (
        <h1 className="font-bold text-xl text-yellow-300">
            {dict.hello}
        </h1>
    );
};

export default TextComponent;