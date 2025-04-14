export const ProjectCardStyles = {
    position: "relative",
    height: '100%',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
        '& .project-overlay': {
            opacity: 1
        }
    }
};