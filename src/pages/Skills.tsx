import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";

const skills = [
  { name: "Python", x: -3, y: 2, z: 0 },
  { name: "TensorFlow", x: 2, y: 1.5, z: -1 },
  { name: "PyTorch", x: -2, y: -1, z: 0.5 },
  { name: "React", x: 3, y: -0.5, z: -0.5 },
  { name: "JavaScript", x: -1, y: 0.5, z: 1 },
  { name: "OpenCV", x: 1, y: -2, z: 0 },
  { name: "MongoDB", x: -2.5, y: 0, z: -1 },
  { name: "MySQL", x: 2.5, y: 2, z: 0 },
  { name: "C++", x: 0, y: 1.5, z: -1 },
  { name: "Java", x: -1.5, y: -2, z: 0.5 },
  { name: "HTML", x: 1.5, y: -1.5, z: 1 },
  { name: "CSS", x: 0, y: -0.5, z: -0.5 },
];

function SkillOrb({ name, position }: { name: string; position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.3}
            transparent
            opacity={0.2}
          />
        </mesh>
        <mesh>
          <ringGeometry args={[0.55, 0.6, 32]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.5} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  );
}

function SkillsScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#0099ff" />
      {skills.map((skill) => (
        <SkillOrb
          key={skill.name}
          name={skill.name}
          position={[skill.x, skill.y, skill.z]}
        />
      ))}
    </>
  );
}

const skillCategories = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL"],
  },
  {
    category: "AI/ML",
    items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "MediaPipe"],
  },
  {
    category: "Web Development",
    items: ["React", "Next.js", "Node.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "VS Code", "Jupyter", "Streamlit"],
  },
];

const Skills = () => {
  return (
    <Layout>
      <section className="py-20 min-h-screen">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="My Skills"
            subtitle="Technical expertise blended with creativity — explore my core competencies below"
            highlight="Skills"
          />

          {/* 3D Skills Visualization */}
          <div className="relative h-[400px] md:h-[500px] mb-16 rounded-2xl overflow-hidden border border-border bg-card/50">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
              <SkillsScene />
            </Canvas>
            {/* Skill labels overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="absolute text-primary text-sm font-medium"
                  style={{
                    left: `${50 + skill.x * 8}%`,
                    top: `${50 - skill.y * 8}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
