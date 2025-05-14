
import { Card, CardContent } from "@/components/ui/card";



const TestimonialCard = ({ quote, author, role }) => {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6 pb-6">
        <div className="text-business-700 mb-4 text-3xl font-serif">"</div>
        <blockquote className="mb-4 text-gray-700 italic">
          {quote}
        </blockquote>
        <footer>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </footer>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
