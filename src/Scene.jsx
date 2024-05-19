import {Environment, MeshWobbleMaterial, OrbitControls} from "@react-three/drei";

const Scene = () => {
    return (
        <>
            <OrbitControls/>
            <ambientLight/>

            <Environment background files="./static/env-maps/1.hdr" />

            <mesh>
                <boxGeometry args={[1, 1, 1, 32, 32, 32]} />
                <MeshWobbleMaterial color="#F76E53" factor={3} speed={0.4} />
            </mesh>
        </>
    );
};

export default Scene;