import { SplittingText } from '@/components/animate-ui/text/splitting';
 
const SplittingText = () => {
  return (
    <div className="flex flex-col gap-2 justify-center text-center">
      <SplittingText
        className="text-2xl"
        text="Introducing Splitting Text component"
      />
      <SplittingText
        className="text-base text-muted-foreground"
        text="Made with Motion. Highly customizable and easy to use."
        delay={2200}
        type="words"
      />
    </div>
  );
};

export default SplittingText;