import ClientCard from "./ClientCard";

const ClientList = ({ clients }) => {
	return (
		<div className="space-y-4">
			{clients.map((client, idx) => (
				<ClientCard key={idx} client={client} />
			))}
		</div>
	);
};

export default ClientList;
