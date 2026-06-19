"use client";
import formCover from "@/assets/form-cover.jpg";
import pressLogo from "@/assets/press-logo.png";
import { Badge } from "@/components/ui/badge";
import { FilloutPopupEmbed } from "@fillout/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export const Gallery = () => {
    const [open, setOpen] = useState(false)


    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="w-full">
                <img className="relative z-20 aspect-video w-full object-cover h-45" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/2498cd74-8281-4216-9998-1819f68cea57/Plumfield_Library_for_Web/w=1920,quality=90,fit=scale-down" />
                <CardHeader>

                    <CardAction>
                        <Badge variant="secondary">Library</Badge>
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
                <img className="relative z-20 aspect-video w-full object-cover h-45" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/e5f98bc9-5db8-494c-bce6-abcc7fb520ad/2/w=1920,quality=90,fit=scale-down" />
                <CardHeader>

                    <CardAction>
                        <Badge variant="secondary">Library</Badge>
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
            <Card className="w-full">
                <div className="relative z-20 aspect-video w-full object-cover h-45  bg-plum mt-0 pt-0">
                    <div className="flex h-full w-full items-center justify-center">
                        <img
                            className="max-h-3/4 max-w-3/4 object-contain"
                            src={pressLogo}
                            alt="Centered"
                        />
                    </div>
                </div>
                <CardHeader>

                    <CardAction>
                        <Badge variant="secondary">Press</Badge>
                    </CardAction>
                    <CardTitle>
                        Plumfield Press
                    </CardTitle>
                    <CardDescription>
                        A Small Press Built by Librarians for Librarians, Families, and Schools
                    </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                    <Button className="w-full" asChild><a href="https://plumfieldpress.com" target="_blank">View Website</a></Button>
                </CardFooter>
            </Card>
            <Card className="w-full">
                <img className="relative z-20 aspect-video w-full object-cover h-45" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/e6682ba3-a341-4a27-9157-aa44acba5767/cropped-Snap_the_Whip_1872_Winslow_Homer/w=1920,quality=90,fit=scale-down" />

                <CardHeader>

                    <CardAction>
                        <Badge variant="secondary">Blog</Badge>
                    </CardAction>
                    <CardTitle>
                        Plumfield Mom
                    </CardTitle>
                    <CardDescription>
                        Christians, Book Reviewers, Podcasters, Lovers of Good, True, and Beautiful Books. Plumfield Moms is for families and living books lending librarians.
                    </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                    <Button className="w-full" asChild><a href="https://plumfieldmoms.com" target="_blank">View Website</a></Button>
                </CardFooter>
            </Card>
            <Card className="w-full">
                <img className="relative z-20 aspect-video w-full object-cover h-45" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/e6682ba3-a341-4a27-9157-aa44acba5767/cropped-Snap_the_Whip_1872_Winslow_Homer/w=1920,quality=90,fit=scale-down" />
                <CardHeader>
                    <CardAction>
                        <Badge variant="secondary">Book List</Badge>
                    </CardAction>
                    <CardTitle>
                        Books Boys Love
                    </CardTitle>
                    <CardDescription>
                        Moms often ask us for book recommendations for their 8-12 year old sons. Even if the boys are reading independently, many do not just dive into novels the way that girls seem to.
                    </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                    <Button className="w-full" asChild><a href="https://plumfieldmoms.com/plumfield-moms-book-lists/books-boys-love" target="_blank">View Website</a></Button>
                </CardFooter>
            </Card>
            <Card className="w-full">
                <img className="relative z-20 aspect-video w-full object-cover h-45" src={formCover} />
                <CardHeader>
                    <CardAction>
                        <Badge variant="secondary">Form</Badge>
                    </CardAction>
                    <CardTitle>
                        Plumfield Library Waiting List
                    </CardTitle>
                    <CardDescription>
                        Use the link below to sign up for our waiting list
                    </CardDescription>


                </CardHeader>
                <CardFooter className="mt-auto">
                    <Button className="w-full" onClick={() => setOpen(true)}>Open Form</Button>
                </CardFooter>
            </Card>
            <FilloutPopupEmbed filloutId="fE4qATZfL8us" isOpen={open} onClose={() => setOpen(false)} />

        </div>
    )
}