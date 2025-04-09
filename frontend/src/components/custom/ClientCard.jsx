import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { Phone, MapPin, CalendarDays, CalendarClock } from "lucide-react";

const formatDate = (dateStr) => {
	if (!dateStr) return "-";

	// Remove the `T00:00:00` part
	const cleanedDate = dateStr.split("T")[0]; // This will get the part before 'T'

	// Split the cleaned date into day, month, and year
	const [year, month, day] = cleanedDate.split("-");

	if (!day || !month || !year) return "-";

	// Return the formatted date as DD-MM-YYYY
	return `${day}-${month}-${year}`;
};



const isValidUrl = (url) => {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
};

const ClientCard = ({ client }) => {
	return (
		<Card className="w-full mb-4 shadow-lg rounded-2xl p-4 border border-gray-200">
			<CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center">
				<div>
					<h3 className="text-xl font-semibold">{client.Name}</h3>
					<p className="text-sm text-gray-500">Client ID: {client.ClientId}</p>
				</div>
				<Badge className="mt-2 md:mt-0 bg-black text-white">
					{client.Status}
				</Badge>
			</CardHeader>

			<CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
				<div className="flex items-center gap-2">
					<Phone className="w-4 h-4 text-gray-500" />
					<span>
						<span className="font-medium">Mobile:</span> {client.MobileNo}
					</span>
				</div>
				<div className="flex items-center gap-2">
					<MapPin className="w-4 h-4 text-gray-500" />
					<span>
						<span className="font-medium">Location:</span> {client.CaseLocation}
					</span>
				</div>
				<div>
					<span className="font-medium">Category:</span>{" "}
					{client.ProductSubCategory}
				</div>
				<div>
					<span className="font-medium">Priority:</span> {client.Priority}
				</div>
				<div className="flex items-center gap-2">
					<CalendarDays className="w-4 h-4 text-gray-500" />
					<span>
						<span className="font-medium">Lead Date:</span>{" "}
						{formatDate(client.LeadDate)}
					</span>
				</div>
				<div className="flex items-center gap-2">
					<CalendarClock className="w-4 h-4 text-gray-500" />
					<span>
						<span className="font-medium">Follow-up Date:</span>{" "}
						{formatDate(client.FollowupDate)}
					</span>
				</div>
			</CardContent>

			<Dialog>
				<DialogTrigger asChild>
					<Button
						variant="ghost"
						className="mt-2 w-fit text-white bg-black hover:bg-gray-800 hover:text-white"
					>
						View More
					</Button>
				</DialogTrigger>
				<DialogContent className="max-w-5xl max-h-[80vh] overflow-y-auto">
					<DialogHeader>
						<DialogTitle>More Details for {client.Name}</DialogTitle>
					</DialogHeader>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-800 mt-4">
						<div>
							<strong>Email:</strong> {client.Email}
						</div>
						<div>
							<strong>Client Age:</strong> {client.ClientAge}
						</div>
						<div>
							<strong>Start Date:</strong>
							<br />
							{formatDate(client.StartDate)}
						</div>
						<div>
							<strong>End Date:</strong>
							<br />
							{formatDate(client.EndDate)}
						</div>
						<div>
							<strong>Claim Amount:</strong> {client.ClaimAmount}
						</div>
						<div>
							<strong>Fees Charged:</strong>
							<br />
							{client.FeesCharged}
						</div>
						<div>
							<strong>Agent Charge:</strong>
							<br />
							{client.AgentCharge}
						</div>
						<div>
							<strong>Referral Source:</strong> {client.ReferralSource}
						</div>
						<div>
							<strong>Client Location:</strong> {client.ClientLoc}
						</div>
						<div>
							<strong>Challenges:</strong> {client.Challenges}
						</div>
						<div>
							<strong>Data Tracker:</strong> {client.DataTracker}
						</div>
						<div>
							<strong>Time Spent:</strong> <br />{client.TimeSpent} months
						</div>
						<div>
							<strong>Documents:</strong> {client.Documents}
						</div>
						<div>
							<strong>Tasks:</strong> {client.Tasks}
						</div>
						<div>
							<strong>Assign Issue Stage:</strong> {client.AssignIssueStage}
						</div>
						<div>
							<strong>Future Scope:</strong> {client.FutureScope}
						</div>

						<div>
							<strong>Invoice Link:</strong>
							<br />
							{isValidUrl(client.InvoiceLink) ? (
								<a
									href={client.InvoiceLink}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 underline"
								>
									View
								</a>
							) : (
								<span className="text-red-500">Invalid Link</span>
							)}
						</div>

						<div>
							<strong>Form 15G Link:</strong>
							<br />
							{isValidUrl(client.Form15GLink) ? (
								<a
									href={client.Form15GLink}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 underline"
								>
									View
								</a>
							) : (
								<span className="text-red-500">Invalid Link</span>
							)}
						</div>

						<div>
							<strong>Engagement Letter:</strong>
							<br />
							{isValidUrl(client.EngagementLetterLink) ? (
								<a
									href={client.EngagementLetterLink}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 underline"
								>
									View
								</a>
							) : (
								<span className="text-red-500">Invalid Link</span>
							)}
						</div>

						<div>
							<strong>PF Office:</strong> {client.PFOffice}
						</div>
					</div>
				</DialogContent>
			</Dialog>
		</Card>
	);
};

export default ClientCard;
