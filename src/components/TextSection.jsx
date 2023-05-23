import React from 'react'
import { Text, Html } from "@react-three/drei";
import { fadeOnBeforeCompileFlat } from '../utils/fadeMaterial';


function TextSection({title, subtitle, ...props}) {
  return (
          <group {...props}>
            {title && (
                <Text
                    color="white"
                    anchorX={"left"}
                    anchorY={"bottom"}
                    fontSize={0.42}
                    maxWidth={2.5}
                    lineHeight={1}
                    font={"./fonts/DMSerifDisplay-Regular.ttf"}
                    comp
                >
                    {title}
                    <meshStandardMaterial onBeforeCompile={fadeOnBeforeCompileFlat} color={"white"} />
                </Text>
            )}
            <Text
                color="white"
                anchorX={"left"}
                anchorY={"top"}
                fontSize={0.2}
                maxWidth={2.5}
                font={"./fonts/Inter-Regular.ttf"}
            >
                {subtitle}
                <meshStandardMaterial onBeforeCompile={fadeOnBeforeCompileFlat} color={"white"} />

            </Text>
      </group>

  )
}

export default TextSection