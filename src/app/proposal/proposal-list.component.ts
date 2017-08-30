import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15,
    'Abc company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150,
    120, 15, 'jordan@devcamp.com');

    proposalTwo: Proposal = new Proposal(200,
        'Abc company', 'http://portfolio.jordanhudgens.com', 'Php', 150,
        120, 15, 'jordan@devcamp.com');

    proposalThree: Proposal = new Proposal(388,
    'Abc company', 'http://portfolio.jordanhudgens.com', 'Java', 150,
    120, 15, 'jordan@devcamp.com');

    proposals: Proposal[] = [
        this.proposalOne, 
        this.proposalTwo, 
        this.proposalThree
    ];
}