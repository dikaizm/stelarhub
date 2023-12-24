import valueSkill from "@assets/icons/values/value_skill.svg"
import valueTech from "@assets/icons/values/value_tech.svg"
import valueResult from "@assets/icons/values/value_result.svg"
import valueCraft from "@assets/icons/values/value_craft.svg"
import valueCollab from "@assets/icons/values/value_collab.svg"
import valueQuality from "@assets/icons/values/value_quality.svg"

type BaseIconProps = {
    src: string;
    alt: string;
}

function BaseIcon({ src, alt }: BaseIconProps) {
    return (
        <div className="icon-w">
            <img src={src} alt={alt} />
        </div>
    )
}

export function Skill() {
    return <BaseIcon src={valueSkill} alt="" />
}

export function Tech() {
    return <BaseIcon src={valueTech} alt="" />
}

export function Result() {
    return <BaseIcon src={valueResult} alt="" />
}

export function Craft() {
    return <BaseIcon src={valueCraft} alt="" />
}

export function Collab() {
    return <BaseIcon src={valueCollab} alt="" />
}

export function Quality() {
    return <BaseIcon src={valueQuality} alt="" />
}