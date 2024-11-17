import AddSubscriberForm from '@/components/custom/AddSubscriberForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AddSubscriber = () => {
  return (
    <Card className="flex justify-center items-center w-full max-w-[700px] border-2 border-slate-500 shadow-lg rounded-xl">
      <div className="flex flex-col">
        <CardHeader>
          <CardTitle className="font-semibold text-2xl">Add Subscriber to the client list</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <AddSubscriberForm />
        </CardContent>
      </div>
    </Card>
  );
};

export default AddSubscriber;
