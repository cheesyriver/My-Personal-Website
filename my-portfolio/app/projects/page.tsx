import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="p-20">
      <div className="flex flex-wrap gap-6 items-stretch">
        
        <ProjectCard 
          title="Test Large Card" 
          description="LARGE SIZED"
          href=''
          className="flex-[2_1_400px] h-80"
        />

        <ProjectCard 
          title="Test Small Card" 
          description="SMALL SIZED!"
          href=''
          className="flex-[1_1_250px] h-80" 
        />

        <ProjectCard 
          title="Test Medium Card" 
          description="MEDIUM SIZED"
          href=''
          className="flex-[1_1_300px] h-80" 
        />

        <div className="basis-full h-0"></div>

        <ProjectCard 
          title="Test Medium Card" 
          description="MEDIUM SIZED"
          href=''
          className="flex-[1_1_300px] h-80" 
        />

        <ProjectCard 
          title="Test Small Card" 
          description="SMALL SIZED!"
          href=''
          className="flex-[1_1_250px] h-80" 
        />

        <ProjectCard 
          title="Test Large Card" 
          description="LARGE SIZED"
          href=''
          className="flex-[2_1_400px] h-80"
        />
      </div>
    </div>
  );
}