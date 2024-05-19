import {Environment, MeshReflectorMaterial, MeshWobbleMaterial, OrbitControls} from "@react-three/drei";

const Scene = () => {
    return (
        <>
            <OrbitControls/>
            <ambientLight/>

            <Environment background files="./static/env-maps/1.hdr" />

            { /* <mesh>
                <boxGeometry args={[1, 1, 1, 32, 32, 32]} />
                <MeshWobbleMaterial color="#F76E53" factor={3} speed={0.4} />
            </mesh> */ }

            <mesh rotation-x={-Math.PI * 0.5} position-y={-0.75}>
                <planeGeometry args={[6, 6]} />
                <MeshReflectorMaterial
                    resolution={512}
                    color="gray"
                    blur={[1000, 1000]}
                    mixBlur={1}
                    mirror={1}
                />
            </mesh>
        </>
    );
};

export default Scene;