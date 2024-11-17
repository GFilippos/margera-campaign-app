import SubscriberTable from '@/components/custom/SubscriberTable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SubscriberList() {
  return (
    <div className="w-full">
      <Card className="border-2 border-slate-500 shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="flex justify-center">A list of active subscribers for the specified client.</CardTitle>
        </CardHeader>
        <CardContent className="min-h-[200px]">
          <SubscriberTable />
        </CardContent>
      </Card>
    </div>
  );
}
