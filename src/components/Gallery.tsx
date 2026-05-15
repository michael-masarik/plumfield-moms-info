import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export const Gallery = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="w-full">
            <img className="relative z-20 aspect-video w-full object-cover" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/2498cd74-8281-4216-9998-1819f68cea57/Plumfield_Library_for_Web/w=1920,quality=90,fit=scale-down" />
            <CardHeader>

                <CardAction>
                    <Badge>Library</Badge>
                </CardAction>
                <CardTitle>
                    Plumfield Library
                </CardTitle>
                <CardDescription>
                    A private lending library devoted to cultivating a love of truth, goodness, and beauty through living books.
                </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
                <Button className="w-full" asChild><a href="https://saramasarik.com/library" target="_blank">View Website</a></Button>
            </CardFooter>
        </Card>
        <Card className="w-full">
            <img className="relative z-20 aspect-video w-full object-cover" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/e5f98bc9-5db8-494c-bce6-abcc7fb520ad/2/w=1920,quality=90,fit=scale-down" />
            <CardHeader>

                <CardAction>
                    <Badge>Library</Badge>
                </CardAction>
                <CardTitle>
                    Split Rocks Lending Library
                </CardTitle>
                <CardDescription>
                    Books curated for the purpose of sharing truth, goodness, and beauty with families who desire to cultivate virtue in their homes.
                </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
                <Button className="w-full" asChild><a href="https://splitrockslibrary.com" target="_blank">View Website</a></Button>
            </CardFooter>
        </Card>
    </div>
)