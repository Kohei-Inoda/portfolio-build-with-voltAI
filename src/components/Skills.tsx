import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Database,
  Cloud,
  Terminal,
  Layers,
  GitBranch,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'フロントエンド',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'バックエンド',
    icon: <Database className="w-6 h-6" />,
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'クラウド',
    icon: <Cloud className="w-6 h-6" />,
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'DevOps',
    icon: <Terminal className="w-6 h-6" />,
    skills: ['CI/CD', 'Jenkins', 'GitHub Actions', 'Ansible'],
  },
  {
    title: 'アーキテクチャ',
    icon: <Layers className="w-6 h-6" />,
    skills: ['Microservices', 'REST API', 'GraphQL', 'System Design'],
  },
  {
    title: 'その他',
    icon: <GitBranch className="w-6 h-6" />,
    skills: ['Git', 'Agile', 'Scrum', 'Technical Writing'],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-white/80 backdrop-blur-sm rounded-3xl my-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;