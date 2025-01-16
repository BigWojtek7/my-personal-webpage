import Button from '../Button/Button';

function ProjectIndividual({
  descriptionIntro,
  descriptionBody,
  descriptionEnding,
  imageUrl,
  imageAlt,
  githubUrl,
  liveUrl,
}) {
  return (
    <div className="px-8 py-8 max-w-5xl mx-auto">
      <p>{descriptionIntro}</p>
      <img src={imageUrl} alt={imageAlt} />
      <p>{descriptionBody}</p>
      <p>{descriptionEnding}</p>

      <p className="text-center font-black">GitHub links:</p>
      <div className="max-w-lg flex justify-center gap-4 flex-wrap mx-auto">
        <Button url={githubUrl.frontend} isNewTab={true} style={{textAlign: 'center'}}>
          Frontend
        </Button>
        <Button
          url={githubUrl.backend}
          isNewTab={true}
          style={{textAlign: 'center'}}
        >
          Backend
        </Button>
        <Button url={liveUrl} isNewTab={true} style={{textAlign: 'center'}}>
          Live
        </Button>
      </div>
    </div>
  );
}
export default ProjectIndividual;
