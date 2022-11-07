import React from 'react';
import { NotePencil } from 'phosphor-react';

export interface ButtonProps {
	label: string;
	type: 'primary' | 'secondary';
	onClick: () => void;
	hasIcon?: boolean;
}

export const ButtonComponent: React.FC<ButtonProps> = ({ label, type, onClick, hasIcon }) => (
	<button
		onClick={onClick}
		style={{
			padding: '12px 16px 12px 16px',
			width: '300px',
			height: '60px',
			cursor: 'pointer',
			border: type === 'primary' ? 'none' : '1px solid #03a9f4',
			borderRadius: '40px',
			backgroundColor: type === 'primary' ? '#03a9f4' : 'white',
			color: type === 'primary' ? 'white' : 'gray',
			fontSize: '20px',
		}}
	>
		<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
			{hasIcon && <NotePencil style={{ width: '24px', height: '24px', marginRight: '6px' }} />}
			{label}
		</div>
	</button>
);
